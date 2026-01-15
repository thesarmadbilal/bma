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
 * KSE 100 Index Constituents API
 * 
 * Returns all KSE 100 index constituents with their current values, changes, and other metrics
 * 
 * Response fields:
 * - symbol: Stock symbol (e.g., "ABL")
 * - name: Company name
 * - ldcp: Last day closing price
 * - current: Current price
 * - change: Absolute change
 * - change_percent: Percentage change
 * - idx_wtg: Index weight percentage
 * - idx_point: Index point contribution
 * - volume: Trading volume
 * - freefloat: Free float in millions
 * - market_cap: Market capitalization in millions
 */

try {
    $url = "https://dps.psx.com.pk/indices/KSE100";
    
    $html = @file_get_contents($url);
    if (!$html) {
        http_response_code(500);
        ob_end_clean();
        echo json_encode(["error" => "Failed to fetch KSE100 constituents data"]);
        exit;
    }

    libxml_use_internal_errors(true);
    
    $dom = new DOMDocument();
    @$dom->loadHTML($html);
    $xpath = new DOMXPath($dom);
    
    // Get table headers
    $headers = [];
    $table = $xpath->query("//table[contains(@class, 'tbl')]//thead/tr/th");
    
    foreach ($table as $th) {
        $text = trim($th->textContent);
        // Normalize header names
        $text = strtolower($text);
        $text = preg_replace('/\s+/', '_', $text);
        $text = str_replace(['(', ')', '%'], '', $text);
        $headers[] = $text;
    }
    
    // Get table rows
    $rows = [];
    $tbody = $xpath->query("//table[contains(@class, 'tbl')]//tbody/tr");
    
    foreach ($tbody as $tr) {
        $rowData = [];
        $tds = $tr->getElementsByTagName("td");
    
        foreach ($tds as $i => $td) {
            $text = trim($td->textContent);
            
            // For first column (symbol), extract from <a><strong> structure
            if ($i === 0) {
                $a = $td->getElementsByTagName("a");
                if ($a->length > 0) {
                    $strong = $a->item(0)->getElementsByTagName("strong");
                    if ($strong->length > 0) {
                        $text = trim($strong->item(0)->textContent);
                    } else {
                        $text = trim($a->item(0)->textContent);
                    }
                } else {
                    $strong = $td->getElementsByTagName("strong");
                    if ($strong->length > 0) {
                        $text = trim($strong->item(0)->textContent);
                    }
                }
            } else {
                // For other columns, get text content
                $text = trim($td->textContent);
                // Remove any icon class names or other artifacts that might appear in text
                $text = preg_replace('/icon-\w+-dir/', '', $text);
            }
            
            // Clean up the text - remove extra whitespace and normalize
            $text = preg_replace('/\s+/', ' ', $text);
            $text = trim($text);
            
            // Get header name or use column index
            $headerName = $headers[$i] ?? "col_$i";
            $rowData[$headerName] = $text;
        }
        
        // Only add rows that have a symbol
        if (!empty($rowData['symbol']) || !empty($rowData['col_0'])) {
            $rows[] = $rowData;
        }
    }
    
    // Clean output buffer and send JSON response
    ob_end_clean();
    echo json_encode($rows);
    
} catch (Exception $e) {
    http_response_code(500);
    ob_end_clean();
    echo json_encode(["error" => "Internal server error"]);
    error_log("KSE100 Constituents API error: " . $e->getMessage());
}
