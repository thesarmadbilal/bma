<?php
// Start output buffering to prevent any accidental output
ob_start();

// Set headers first
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    ob_end_clean();
    exit;
}

/**
 * Indices Overview API
 * 
 * Returns all market indices (KSE100, KSE100PR, ALLSHR, etc.) with their current values and changes
 * 
 * Response fields:
 * - index: Index name (e.g., "KSE100")
 * - high: Day's highest value
 * - low: Day's lowest value
 * - current: Current index value
 * - change: Absolute change
 * - %_change: Percentage change
 */

try {
    $url = "https://dps.psx.com.pk/indices";
    
    $html = @file_get_contents($url);
    if (!$html) {
        http_response_code(500);
        ob_end_clean();
        echo json_encode(["error" => "Failed to fetch indices data"]);
        exit;
    }

    libxml_use_internal_errors(true);
    
    $dom = new DOMDocument();
    @$dom->loadHTML($html);
    $xpath = new DOMXPath($dom);
    
    // Get table headers
    $headers = [];
    $table = $xpath->query("//table[@id='indicesTable']//thead/tr/th");
    if ($table->length === 0) {
        $table = $xpath->query("//table[contains(@class, 'tbl')]//thead/tr/th");
    }
    
    foreach ($table as $th) {
        $text = strtolower(trim($th->textContent));
        $headers[] = preg_replace('/\s+/', '_', $text);
    }
    
    // Get table rows
    $rows = [];
    $tbody = $xpath->query("//table[@id='indicesTable']//tbody/tr");
    if ($tbody->length === 0) {
        $tbody = $xpath->query("//table[contains(@class, 'tbl')]//tbody/tr");
    }
    
    foreach ($tbody as $tr) {
        $rowData = [];
        $tds = $tr->getElementsByTagName("td");
    
        foreach ($tds as $i => $td) {
            $text = trim($td->textContent);
            $text = preg_replace("/\s+/", " ", $text);
    
            // Extract index name from <a><b> structure
            $a = $td->getElementsByTagName("a");
            if ($a->length > 0) {
                $b = $a->item(0)->getElementsByTagName("b");
                if ($b->length > 0) {
                    $text = trim($b->item(0)->textContent);
                } else {
                    $text = trim($a->item(0)->textContent);
                }
            } else {
                $b = $td->getElementsByTagName("b");
                if ($b->length > 0) {
                    $text = trim($b->item(0)->textContent);
                }
            }
    
            $rowData[$headers[$i] ?? "col_$i"] = $text;
        }
    
        $rows[] = $rowData;
    }
    
    // Clean output buffer and send JSON response
    ob_end_clean();
    echo json_encode($rows);
    
} catch (Exception $e) {
    http_response_code(500);
    ob_end_clean();
    echo json_encode(["error" => "Internal server error"]);
    error_log("Indices API error: " . $e->getMessage());
}
