<?php

if(isset($_POST['sign'])){
    $companyName= $_POST['companyName'];
    $location= $_POST['location'];
    $Phone= $_POST['phone'];
    $Email= $_POST['Email'];
    echo $companyName .  '  ' .  $location .  '  '  . $phone . ' ' .$Email;
}
?>