

// Curious Agency, Freelancer and Personal Portfolio Template
// Contact Page - Php Script
// agency-contact.html
// All codes rights reserved by Curious Agency, Freelancer and Personal Portfolio Template  


<?
$from = $_POST['email'];
$to = "kyliecalif@gmail.com";

$header = $_POST['email'];
$subject = $_POST['subject'];

$message = "Name = ".$_POST['name'] ."\nPhone = ".$_POST['phone'] ."\nMessage = ".$_POST['message'];
mail($to,$subject,$header,$message);
?>