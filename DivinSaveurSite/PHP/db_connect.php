<?php

  $servername = "185.98.131.128";//185.98.131.128
  $username = "divin1378832";//divin1378832
  $password = "u4qnbuguxv";//u4qnbuguxv
  $dbname = "divin1378832";//divin1378832

  try {
    $dbh = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
      error_log("Connection failed: " . $e->getMessage());
  }
?>
