<?php

$conn = mysqli_connect('localhost:3307','root','','itacademi');
if(!$conn){
  echo("<script> alert('Cannot connect to database')</script>");
}
else{
    $first_name = mysqli_real_escape_string ($conn , $_POST["fname"]) ;
    $last_name = mysqli_real_escape_string ($conn , $_POST["lname"]) ;
    $phone_number = mysqli_real_escape_string ($conn , $_POST["phone_number"]) ;
    $email = mysqli_real_escape_string ($conn , $_POST["email"]) ;
    $genie = mysqli_real_escape_string ($conn , $_POST["genie"]) ;
    $motivation = mysqli_real_escape_string ($conn , $_POST["message"]) ;
    
    $sql = "insert into recruitement values ('$first_name','$last_name','$phone_number','$email','$genie','$motivation')" ;
    mysqli_query($conn,$sql) ;
}

?>