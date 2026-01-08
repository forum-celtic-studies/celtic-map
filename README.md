### Important

This project uses modules via importmap and ESM-syntax.
That means just opening the `index.html` file in your browser will not work.
You need to run a local server to serve the files correctly.

That's for example possible with the `live-server`-extension in VSCode.

---
## Place Entry JSON Template

Copy and fill out this template for each new place. Fields marked with * are required.
Remove comments (lines starting with //) before submitting!

```jsonc
{
  // * Required: decimal degrees, e.g. [49.814444, 6.421389]
  "coordinates": [LATITUDE, LONGITUDE],
  // Optional: ancient name
  "ancientName": "Epternācum",
  // * Required: modern name
  "modernName": "Echternach",
  // Optional: short info 
  "shortInfo": "Roman Villa",
  // * Required: list of types 
  // choose from: place, architecture, object, document, event, immaterial, other
  "types": ["place", "architecture", "document"],
  // Optional: description (for italics use *word*, for bold text **word**)
  "description": "The valley of Echternach has already been inhabited in the Celtic La Tène period...",
  // Optional: images (multiple occurences allowed, separate {}-sections with commas)
  "images": [
    {
      "title": "Echternach Roman Villa",
      "href": "https://upload.wikimedia.org/wikipedia/commons/8/80/EchternachRomanVilla.jpg",
      "altText": "Echternach Roman Villa",
      "imageBy": "David Edgar",
      "imageByLink": "https://commons.wikimedia.org/wiki/User:David_Edgar",
      "license": "CC-BY-SA-3.0",
      "licenseLink": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  ],
  // Optional: further links (multiple occurences allowed, separate {}-sections with commas)
  "furtherLinks": [
    {
      "text": "The Priscian grammar (BNF Paris lat. 10290, f. 3r)",
      "href": "http://gallica.bnf.fr/ark:/12148/btv1b84790031/f9.item"
    }
  ]
}
```

**Attention:**
- All field names and string values must be in double quotes.
- Lists use square brackets [ ... ] and values are comma-separated.
- Remove any lines (fields) you don't need (except required ones).
- Do not leave trailing commas after the last item in an array or object!
- For multiple images or links, add more objects inside the respective array.
- If you copy-paste, check for double-quotes within values and replace with normal quotes!

**Allowed types:** place, architecture, object, document, event, immaterial, other

**Example minimal entry:**
```jsonc
{
  "coordinates": [49.814444, 6.421389],
  "modernName": "Echternach",
  "types": ["place"]
}
```