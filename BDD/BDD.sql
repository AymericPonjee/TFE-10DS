CREATE TABLE TableUser (
    IdUser integer NOT NULL,
    NomUser varchar(25) NOT NULL,
    PrenomUser varchar(25) NOT NULL,
    TotemUser varchar(25),
    QualiUser varchar(25),
    MailUser varchar(50) NOT NULL,
    PasswordUser varchar(30) NOT NULL
);

CREATE TABLE Chef (
    IdChef integer NOT NULL,
    TotemChef varchar(25),
    QualiChef varchar(25),
    FormationChef boolean,
    DescriptionChef varchar(255),
    RoleChef varchar(50),
    -- IdUser
);

CREATE TABLE Camp (
    IdCamp int NOT NULL, 
    LieuCamp varchar(50) NOT NULL,
    MailContact varchar(50),
    NumTelContact integer,
    Commentaire varchar(255),
    InfoBois varchar(255),
);

CREATE TABLE Produit (
    IdProduit int NOT NULL,
    LibelleProduit varchar(50) NOT NULL,
    prixProduit decimal NOT NULL
);

CREATE TABLE Evenement (
    IdEvent int NOT NULL,
    NomEvent varchar(50) NOT NULL,
    DateDebutEvent date NOT NULL,
    DateFinEvent date NOT NULL,
    LieuEvent varchar(50) NOT NULL
);

CREATE TABLE Commande (
    IdCommande int NOT NULL,
    TotalCommande decimal
    -- IdProduit varchar(50)
);

CREATE TABLE Anime (
    IdAnime integer NOT NULL,
    NomAnime varchar(25) NOT NULL,
    PrenomAnime varchar(25) NOT NULL,
    DateNaissAnime date,
    sectionAnime varchar(25),
    AbsenceAnime int,
    MaladieAnime varchar(255),
    CommentaireAnime varchar(225),
    SexeAnime boolean
);

CREATE TABLE UserAnime (
    IdUser integer NOT NULL,
    IdAnime integer NOT NULL
);

CREATE TABLE UserCommande (
    IdUser integer NOT NULL,
    IdCommande integer NOT NULL
);

CREATE TABLE AnimeEvenement (
    IdUser integer NOT NULL,
    IdCommande integer NOT NULL,
    AbsenceAnimeEvent boolean
);

