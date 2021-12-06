<?php
    include("../PHP/db_connect.php");

    $con = mysqli_connect($servername,$username,$password,$dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $NomUtilisateur = $obj['NomUtilisateur'];
    $PrenomUtilisateur = $obj['PrenomUtilisateur'];
    $TotemUtilisateur = $obj['TotemUtilisateur'];
    $QualiUtilisateur = $obj['QualiUtilisateur'];
    $MailUtilisateur = $obj['MailUtilisateur'];
    $MDPUtilisateur = $obj['MDPUtilisateur'];
    $IsChef = $obj['IsChef'];

    $CheckSQL = "SELECT * FROM Utilisateur WHERE MailUtilisateur='$MailUtilisateur'";
    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

    if(isset($check)) {
        $EmailExistMSG = false; //Cette email existe déjà.. Essayez autre chose !
        $EmailExistJson = json_encode($EmailExistMSG);
        echo $EmailExistJson ;  
    }
    else {
        $Sql_Query = "INSERT INTO Utilisateur (NomUtilisateur,PrenomUtilisateur,TotemUtilisateur, QualiUtilisateur,MailUtilisateur,MDPUtilisateur,IsChef) 
            values ('$NomUtilisateur','$PrenomUtilisateur','$TotemUtilisateur', '$QualiUtilisateur', '$MailUtilisateur', '$MDPUtilisateur', '$IsChef')";
   
        if(mysqli_query($con,$Sql_Query)) {
            $MSG = true;//success
            $json = json_encode($MSG);
            echo $json;
        }
        else{ 
            $error = 0;//Try again
            $json = json_encode($error);
            echo $json;
        }
    }
    mysqli_close($con);
?>