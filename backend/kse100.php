<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

/**
 * KSE100 Time Series API
 * 
 * Endpoints:
 * - GET /kse100.php?type=intraday - Returns intraday (1D) KSE100 index values
 * - GET /kse100.php - Returns historical end-of-day KSE100 index values
 * 
 * Intraday Response format:
 * {
 *   "status": 1,
 *   "message": "",
 *   "data": [
 *     [timestamp, value, volume],
 *     ...
 *   ]
 * }
 * 
 * EOD Response format:
 * {
 *   "status": 1,
 *   "message": "",
 *   "data": [
 *     [timestamp, close, volume, high],
 *     ...
 *   ]
 * }
 */

$type = $_GET['type'] ?? 'eod';
$url = $type === 'intraday' 
    ? "https://dps.psx.com.pk/timeseries/int/KSE100"
    : "https://dps.psx.com.pk/timeseries/eod/KSE100";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false || !empty($error)) {
    http_response_code(500);
    echo json_encode([
        "status" => 0,
        "message" => "Failed to fetch market data: " . ($error ?: "Unknown error"),
        "data" => []
    ]);
    exit;
}

if ($httpCode !== 200) {
    http_response_code($httpCode);
    echo json_encode([
        "status" => 0,
        "message" => "HTTP error: " . $httpCode,
        "data" => []
    ]);
    exit;
}

// Return the response as-is (should already be valid JSON)
echo $response;
