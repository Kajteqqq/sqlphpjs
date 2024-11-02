<?php
header('Content-Type: application/json');

$baza = new mysqli("localhost", "root", "", "baza");

if ($baza->connect_error) {
    die(json_encode(["error" => "Błąd połączenia: " . $baza->connect_error]));
}

$sql = "SELECT * FROM pracownik";  // Przykład zapytania do tabeli 'pracownik'
$result = $baza->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$baza->close();

// Zwrócenie danych jako JSON
echo json_encode($data);
?>
