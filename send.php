<?php
$name = $_POST['fullname'];
$email = $_POST['emailA'];
 
$to = 'info@mapleleafharvest.org';
$subject = 'the subject';
$message = 'FROM: '.$name.' Email: '.$email;
$headers = 'From: info@mapleleafharvest.org' . "\r\n";
 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Thank you for Subscribing!"; // success message
}else{
echo "Invalid Email, please provide a correct email address.";
}

?>