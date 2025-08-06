<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

header("Content-Type: application/json");

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$telefon = $_POST['telefon'] ?? '';
$position = $_POST['position'] ?? '';
$firma = $_POST['firma'] ?? '';

$to = "info@marke-handwerk.de";  // Empfängeradresse
$subject = "Neue Anfrage von $name";
$message = "Name: $name\nFirma: $firma\nTelefon: $telefon\nPosition: $position\nE-Mail: $email";

// WICHTIG: Domain-E-Mail als Absender (IONOS verlangt das)
$headers = "From: info@marke-handwerk.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo json_encode(["success" => true, "message" => "Nachricht erfolgreich gesendet."]);
} else {
  echo json_encode(["success" => false, "message" => "Fehler beim Senden."]);
}