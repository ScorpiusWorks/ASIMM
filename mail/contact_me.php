<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No info Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'office@stanciuexpert.ro'; // office@stanciuexpert.ro Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contact website: $name";
$email_body = "Ai primit un mesaj nou prin formularul de contact de pe website.\n"."Iata detaliile:\n\nNume:$name\nEmail:$email_address\nMesaj:\n$message";
$headers = "From: noreply@stanciuexpert.ro\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
