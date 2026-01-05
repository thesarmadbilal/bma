<?php

$url = "https://dps.psx.com.pk/timeseries/eod/KSE100";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch market data"]);
    exit;
}

curl_close($ch);

echo $response;