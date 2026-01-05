<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


$action = $_GET['action'] ?? '';

switch ($action) {
    case 'kse100':
        require 'kse100.php';
        break;
    default:

        $url = "https://dps.psx.com.pk/market-watch";
        
        $html = file_get_contents($url);
        if (!$html) {
            http_response_code(500);
            echo json_encode(["error" => "Failed to fetch market data"]);
            exit;
        }

        libxml_use_internal_errors(true); // Prevent HTML parsing warnings
        
        $dom = new DOMDocument();
        $dom->loadHTML($html);
        
        $xpath = new DOMXPath($dom);
        
        // Get table headers
        $headers = [];
        foreach ($xpath->query("//table/thead/tr/th") as $th) {
            $text = strtolower(trim($th->textContent));
            $headers[] = preg_replace('/\s+/', '_', $text);
        }
        
        // Get table rows
        $rows = [];
        foreach ($xpath->query("//table/tbody/tr") as $tr) {
            $rowData = [];
            $tds = $tr->getElementsByTagName("td");
        
            foreach ($tds as $i => $td) {
                $text = trim($td->textContent);
                $text = preg_replace("/\s+/", " ", $text); // Normalize spaces
        
                // If it contains <a>, extract its text
                $a = $td->getElementsByTagName("a");
                if ($a->length > 0) {
                    $text = trim($a[0]->textContent);
                }
        
                $rowData[$headers[$i] ?? "col_$i"] = $text;
            }
        
            $rows[] = $rowData;
        }
        
        echo json_encode($rows);
        exit;
}


