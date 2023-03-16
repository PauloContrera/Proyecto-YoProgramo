<?php

$nombre = $_POST ["nombre"];
$correo = $_POST ["correo"];
$telefono = $_POST ["telefono"];
$mensaje = $_POST ["mensaje"];

$body="Nombre: ".$nombre."<br> Correo: ".$correo."<br> Telefono: ".$telefono."<br> Mensaje:<br>".$mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'paulo.contrera.gosp@gmail.com';                     //SMTP username
    $mail->Password   = 'php9632147';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('paulo.contrera.gosp@gmail.com', 'Paulo');
    $mail->addAddress('paulocontrera97@gmail.com', $nombre);     //Add a recipient

    //Content
    $mail->isHTML(true);
    $mail->CharSet='UTF-8';                                //Set email format to HTML
    $mail->Subject = 'PORTAFOLIO';
    $mail->Body    = $body;

    $mail->send();
    echo '
    <script>
    alert("El mensaje se envio correctamente");
    window.history.go(-1);
    </script>';
} catch (Exception $e) {
    // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}