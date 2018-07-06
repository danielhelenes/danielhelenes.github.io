<?php
/*SendGrid Library*/
require_once ('vendor/autoload.php');

/*Post Data*/
$name = $_POST['inputName'];
$email = $_POST['inputEmail'];
$message = $_POST['inputMessage'];

/*Content*/
$from = new SendGrid\Email("Daniel", "minhas.stufs@gmail.com");
$subject = "You received a new email";
$to = new SendGrid\Email("Daniel Ferro", "dribeiro.hi@gmail.com");
$content = new SendGrid\Content("text/html", "
  Name: {$name}<br>
  Email: {$email}<br>
  Message: {$message}
");

/*Send the mail*/
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = ('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');
$sg = new \SendGrid($apiKey);

/*Response*/
$response = $sg->client->mail()->send()->post($mail);
?>

<!--Print the response-->
<pre>
    <?php
    var_dump($response);
    ?>
</pre>
