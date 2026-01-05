const express = require("express");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/market-watch", async (req, res) => {
  try {
    const response = await fetch("https://dps.psx.com.pk/market-watch");
    const html = await response.text();

    const $ = cheerio.load(html);

    // Extract header names from the table's first row of <th> elements
    const headers = [];
    $("table thead tr th").each((i, el) => {
      headers.push(
        $(el).text().trim().toLowerCase().replace(/\s+/g, "_") // make keys like 'change_%' => 'change_%'
      );
    });

    const data = [];

    // Iterate through each table row in tbody
    $("table tbody tr").each((i, row) => {
      const rowData = {};
      $(row)
        .find("td")
        .each((j, cell) => {
          let cellText = $(cell).text().trim();

          // Clean up cellText, e.g. remove newlines, multiple spaces etc.
          cellText = cellText.replace(/\n/g, "").replace(/\s+/g, " ");

          // If the cell contains an <a> tag, get its text (e.g. for SYMBOL)
          if ($(cell).find("a").length) {
            cellText = $(cell).find("a").text().trim();
          }

          rowData[headers[j]] = cellText;
        });
      data.push(rowData);
    });

    res.json(data);
  } catch (error) {
    console.error("Error parsing table:", error);
    res.status(500).json({ error: "Failed to fetch or parse market data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
