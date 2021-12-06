<?php
    include("../PHP/db_connect.php");

    $con = mysqli_connect($servername,$username,$password,$dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $MailUtilisateur = $obj['mail_utilisateur'];
    $MDPUtilisateur = $obj['mdp_utilisateur'];

    $CheckSQL = "SELECT * FROM Utilisateur WHERE MailUtilisateur = '$MailUtilisateur' AND MDPUtilisateur = '$MDPUtilisateur'";
    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

    if(isset($check)){
        $Valide = 1;//redirection
        $Valide_Json = json_encode($Valide);
        echo $Valide_Json ;   
    }
    else{
        $NValide = 0;//Aïe.. Vous vous êtes trompé quelque part..
        $NValide_Json = json_encode($NValide);
        echo $NValide_Json ; 
    }

    mysqli_close($con);
?>