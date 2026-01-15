<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

/**
 * Performers API
 * 
 * Fetches TOP ACTIVE STOCKS from PSX performers page
 * Returns stocks sorted by volume (most active stocks)
 * 
 * Response fields:
 * - symbol: Stock ticker symbol
 * - price: Current price
 * - change: Absolute price change
 * - change_(%): Percentage price change
 * - volume: Trading volume (formatted)
 */

$url = "https://dps.psx.com.pk/performers";

$html = file_get_contents($url);
if (!$html) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch performers data"]);
    exit;
}

libxml_use_internal_errors(true);

$dom = new DOMDocument();
$dom->loadHTML($html);
$xpath = new DOMXPath($dom);

// Find the "TOP ACTIVE STOCKS" heading and get the table after it
$rows = [];
$headings = $xpath->query("//h3[contains(@class, 'marketPerf__heading')]");

foreach ($headings as $heading) {
    if (stripos($heading->textContent, 'TOP ACTIVE STOCKS') !== false) {
        // Find the table after this heading
        $table = $xpath->query(".//following-sibling::div[contains(@class, 'marketPerf__table')]//table", $heading);
        if ($table->length > 0) {
            $tbl = $table->item(0);
            
            // Get headers
            $headers = [];
            $ths = $xpath->query(".//thead/tr/th", $tbl);
            foreach ($ths as $th) {
                $text = strtolower(trim($th->textContent));
                $headers[] = preg_replace('/\s+/', '_', $text);
            }
            
            // Get rows
            $trs = $xpath->query(".//tbody/tr", $tbl);
            foreach ($trs as $tr) {
                $rowData = [];
                $tds = $tr->getElementsByTagName("td");
                
                foreach ($tds as $i => $td) {
                    $text = trim($td->textContent);
                    $text = preg_replace("/\s+/", " ", $text);
                    
                    // Extract symbol from <a><strong> structure (first column)
                    if ($i === 0) {
                        $a = $td->getElementsByTagName("a");
                        if ($a->length > 0) {
                            $strong = $a->item(0)->getElementsByTagName("strong");
                            if ($strong->length > 0) {
                                $text = trim($strong->item(0)->textContent);
                            } else {
                                $text = trim($a->item(0)->textContent);
                            }
                        }
                    }
                    
                    // Parse CHANGE column (format: "1.09 (5.58%)" or "-0.86 (-2.07%)")
                    if ($i === 2 && preg_match('/([+-]?\d+\.?\d*)\s*\(([+-]?\d+\.?\d*)%\)/', $text, $matches)) {
                        $rowData['change'] = $matches[1];
                        $rowData['change_(%)'] = $matches[2] . '%';
                    } else {
                        $rowData[$headers[$i] ?? "col_$i"] = $text;
                    }
                }
                
                $rows[] = $rowData;
            }
            break; // Only process TOP ACTIVE STOCKS table
        }
    }
}

echo json_encode($rows);
