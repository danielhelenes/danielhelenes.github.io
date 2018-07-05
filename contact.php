<?php
require_once 'lib/SendGrid.php';
require_once 'lib/Unirest.php';
SendGrid::register_autoloader();
// <sendgrid_username>,<sendgrid_password> should be replaced with the SendGrid credentials
$sendgrid_username = 'dribeiro.hi@gmail.com';
$sendgrid_password = 'hisurf99815524';
// update the <from_address> with your email address
$from_email = "<from_address>";
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  // get values from form 
  $to = $_POST['inputName'];
  $subject = $_POST['inputEmail'];
  $content = $_POST['inputMessage'];
  // make a secure connection to SendGrid
  $sendgrid = new SendGrid($sendgrid_username, $sendgrid_password);
  $mail     = new SendGrid\Email();
  $mail->addTo($to)->
    setFrom($from_email)->
    setSubject($subject)->
    setText($content);
  # use the Web API to send your message
  $response = $sendgrid->web->send($mail);
  # check request response
  if ($response->message == 'success')
  {
    $message = "Email sent successfully";
    $status = ' success';
    $to = '';
    $subject = '';
    $content = '';
  }
  else
  {
    $message = "Email not sent - " . $response->errors[0];
    $status = ' error';
  }
}
?>
