const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const User = require("../models/User");
const SECTIONS = require("../utils/constants");

// SECTIONS IS THE DESIRED SORT
const sortBy = SECTIONS.reduce((previous, current, index) => {
  previous[current] = index;
  return previous;
}, {});

function sortSection(listOfSection) {
  return listOfSection.sort((a, b) => sortBy[a] - sortBy[b]);
}

//route pour créer des évènements
router.post("/create", (req, res) => {
  // list potientiellement dans le mauvais order
  //const listOfChosenSectionsMalFormated = req.body.section;

  // const sortedSection = listOfChosenSectionsMalFormated.sort(
  // (a, b) => sortBy[a] - sortBy[b]
  // );
  const sortedSection = sortSection(req.body.section);
  const event = new Event({ ...req.body, section: sortedSection });

  event
    .save()
    .then((data) => {
      res.json(data);
      res.status(201);
    })
    .catch((err) => {
      console.log("[eventController] : error on create", err);
      res.json({ err });
    });
});

//route pour récupérer la listes des évènements trié et qui disparraissent après la date now
// request get cannot have a body eg. json
// request get -> params
router.get("/list", (req, res) => {
  const userDateInput = new Date(req.query.beginAt);
  const now = new Date();
  const valideDate = userDateInput >= now ? userDateInput : now;

  // on va verfier si la section demande fait partie de la list de sections
  // et prevent des injections
  if (req.query.section) {
    Event.find({
      endAt: { $gte: valideDate },
      section: { $in: req.query.section },
    })
      .sort({ beginAt: 1 })
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  } else {
    Event.find({
      endAt: { $gte: valideDate },
    })
      .sort({ beginAt: 1 })
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  }
});

//route pour récupérer la listes de tous les évènements
router.get("/getAllEvents", (req, res) => {
  Event.find()
    .sort({ beginAt: 1 })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//route pour supprimer un évènement associé à l'id
router.delete("/:idEvent", (req, res) => {
  Event.findByIdAndDelete(req.params.idEvent)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.put("/:idEvent", (req, res) => {
  const formatedSection = sortSection(req.body.section);
  Event.findByIdAndUpdate(
    req.params.idEvent,
    { ...req.body, section: formatedSection },
    { new: true }
  )
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
