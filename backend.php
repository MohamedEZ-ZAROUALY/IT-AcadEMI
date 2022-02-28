<?php
// the message
ini_set("SMTP","localhost");
ini_set("smtp_port","25");

$msg = $_POST["message"];
$subject = $_POST["msg_subject"];

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("ezzaroualymuhammad@gmail.com",$subject,$msg);
header("index.html");
?>