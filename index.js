// Initialize the map
const map = L.map('map');

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const commonPopupConfig = {
    maxWidth: 600,
    className: 'popup'
}

// Add markers
const markers = [
    L.marker([49.7596, 6.6439]).bindPopup(`<h4>Trier</h4>`),
    L.marker([49.814444, 6.421389]).bindPopup(
        buildPopupHtml({
            title: 'Epternācum (Echternach)',
            description: `
                The valley of Echternach has already been inhabited in the Celtic La Tène period,
                during the last centuries BCE. In the first century CE, one of the largest Roman
                villas of the northwest provinces of the Empire was constructed there.
                Another important factor for the history of the region was the imperial abbey
                <em class="emphasis-secondary">(Reichsabtei Echternach)</em>,
                founded by St Willibrord in 698. Willibrord hailed from
                Northumbria and received his training at the Irish monastery of Rathmelsigi.
                He is known as the "apostle of the Frisians" and bishop of Utrecht. He died at
                Echternach on 7 November 739. The saint was accompanied by Irish scribes, a fact
                apparent from illuminated books preserved and produced at the local scriptorium.
                A Latin manuscript from the ninth century, kept in Paris today
                (BNF Paris lat. 10290), a grammar of Priscian in insular script, contains Old Irish
                and Old Breton glosses, which belong to the oldest of their kind.
                The name <em class="emphasis-primary">Echternach</em> goes back to
                <em class="emphasis-secondary">Epternācum</em>, derived from the personal name
                <em class="emphasis-secondary">Epternos</em>, which is known, in its Latin form
                <em class="emphasis-secondary">Epternus</em>, from a local inscription.
            `,
            imageHref:
                'https://upload.wikimedia.org/wikipedia/commons/8/80/EchternachRomanVilla.jpg',
            imageAltText: 'Echternach Roman Villa',
            imageCredit: 'Photo: David Edgar, CC-BY-SA-3.0',
            furtherLinks: [
                {
                    text: 'The Priscian grammar (BNF Paris lat. 10290, f. 3r)',
                    href: 'http://gallica.bnf.fr/ark:/12148/btv1b84790031/f9.item'
                }
            ]
        }),
        commonPopupConfig
    ),
    L.marker([49.30221951295557, 6.848619912641792]).bindPopup(
        buildPopupHtml({
            title: 'Elm-Sprengen (Sauwasen)',
            description: `
                In a stretch of the "European Celtic Route" in the forest of Herchenbach, four burial
                mounds were found, containing grave goods of the late Hallstatt period (5th century BCE,
                Ha D). One of the mounds has been reconstructed as a recognizable hillock in 2005, a
                wagon tomb (mound 3) in vertical section in 2007. In the wooden burial chamber, the
                wagon can be seen, besides a dummy of the deceased and examples of grave goods, which
                were not preserved at this site except for a golden earring.
            `,
            }),
        commonPopupConfig
    ),
    L.marker([50.35669146049006, 7.588382581952168]).bindPopup('<b>Koblenz</b><br>Located at the confluence of the Rhine and Moselle rivers.', commonPopupConfig),
    L.marker([49.62559683321979, 7.914808023342875]).bindPopup('<b>Donnersberg</b><br>The highest peak in the Palatinate region.', commonPopupConfig),
    L.marker([49.606111, 5.075556]).bindPopup('<b>Mosomagos (Mouzon)</b><br>A historical site with ancient ruins.', commonPopupConfig),
    L.marker([50.178333, 5.665]).bindPopup(
        buildPopupHtml({
            title: 'Bérismenil',
            description: `
                On a rocky promontory above the river Ourthe, called "Le Cheslé", a large fortification of
                about 13 hectares has been constructed. It was in use from the fifth century BCE on
                (LT A and B). It has a double rampart system of more than 1.7 km length. The access was
                originally in the north and later on a little more to the northwest. All other sides are
                protected by steep slopes. There have been excavations from the 1960s on, and in 1980, part
                of the rampart has been reconstructed. Most probably, Le Cheslé is just outside the
                territory of the Treveri.
            `,
            imageHref:
                'https://upload.wikimedia.org/wikipedia/commons/c/c7/Reconstitution_porte.JPG',
            imageAltText: 'Bérismenil',
            imageCredit: 'Photo: commons.wikimedia.org, Anabase4, CC-BY-SA-3.0'
        }),
        commonPopupConfig
    ),
    L.marker([50.33922878806975, 7.439752298915589]).bindPopup('<b>Goloring (Bassenheim)</b><br>An ancient Celtic ring fort.', commonPopupConfig),
    L.marker([49.803333, 5.205]).bindPopup('<b>Cugnon</b><br>', commonPopupConfig),
    L.marker([49.411389, 5.230278]).bindPopup('<b>Lion-devant-dun</b><br>', commonPopupConfig),
    L.marker([49.91561284272628, 5.377023740733322]).bindPopup(
        buildPopupHtml({
            title: 'Libramont-Chevigny, Musée des Celtes',
            description: `
                The "Museum of the Celts" is dedicated to the the study of the Celtic culture in
                the Ardennes. It intends to unite numerous small collections, to add new items,
                especially from the research carried out by the <em class="emphasis-secondary">
                Centre de Recherches Archéologiques en Ardenne</em>, to preserve the findings and
                to present them to the public. The Museum lays particular emphasis on the correction
                of current stereotypes and prejudices about the Celts. Among others, it houses
                findings from Bérismenil, Cherain-Brisy and Cugnon.
            `,
        }),
        commonPopupConfig
    ),
    L.marker([49.5675, 5.5325]).bindPopup('<b>Verdunum (Virton)</b><br>', commonPopupConfig),
    L.marker([50.248259232415485, 7.446738062884804]).bindPopup('<b>Alkena (Alken)</b><br>', commonPopupConfig),
    L.marker([49.848582, 7.392168]).bindPopup('<b>Bundenbach (Altburg)</b><br>', commonPopupConfig),
    L.marker([49.82548182583125, 7.298186249122467]).bindPopup('<b>Hottenbach</b><br>', commonPopupConfig),
    L.marker([50.17835793056453, 7.286190842781618]).bindPopup('<b>Martberg</b><br>', commonPopupConfig),
    L.marker([49.61510671168662, 7.187182191804576]).bindPopup('<b>Hoppstädten-Weiersbach</b><br>', commonPopupConfig),
    L.marker([49.855393504521366, 7.164632626566603]).bindPopup('<b>Belginum (Wederath; Archäologiepark)</b><br>', commonPopupConfig),
    L.marker([49.75445538415072, 7.166859817310713]).bindPopup('<b>Allenbach</b><br>', commonPopupConfig),
    L.marker([49.99312013585362, 7.108027612129568]).bindPopup('<b>Kröv (Burgberg)</b><br>', commonPopupConfig),
    L.marker([49.97043087904943, 7.054190197900325]).bindPopup('<b>Kinheim-Kindel</b><br>', commonPopupConfig),
    L.marker([49.98560180938939, 7.022102376678921]).bindPopup('<b>Arduena (Erden; Borberg/Burgberg)</b><br>', commonPopupConfig),
    L.marker([49.62215672921777, 7.002182760164149]).bindPopup('<b>Otzenhausen</b><br>', commonPopupConfig),
    L.marker([49.48298166460118, 7.031079347856441]).bindPopup('<b>Tholey</b><br>', commonPopupConfig),
    L.marker([49.57965, 6.91395]).bindPopup('<b>Lustara (Wadern-Oberlöstern)</b><br>', commonPopupConfig),
    L.marker([49.5562537385328, 6.819946421895424]).bindPopup('<b>Weißkirchen</b><br>', commonPopupConfig),
    L.marker([49.336344309886925, 6.606950190519136]).bindPopup('<b>Enja (Ihn; Sudelfels)</b><br>', commonPopupConfig),
    L.marker([49.355776978263634, 6.564342943056346]).bindPopup('<b>Niedaltdorf</b><br>', commonPopupConfig),
    L.marker([49.355776978263634, 6.564342943056346]).bindPopup('<b>Merzig-Besseringen</b><br>', commonPopupConfig),
    L.marker([49.63448147168677, 5.599712437080059]).bindPopup('<b>Buzenol-Montauban</b><br>Montauban-Buzenol?', commonPopupConfig),
    L.marker([49.684722, 5.815556]).bindPopup('<b>Orolaunum (Arlon)</b><br>', commonPopupConfig),
    L.marker([49.542036032965136, 5.859888862725093]).bindPopup('<b>Titelberg</b><br>', commonPopupConfig),
    L.marker([49.473611, 5.957778]).bindPopup('<b>Audun-le-tiche</b><br>', commonPopupConfig),
    L.marker([49.666667, 5.966667]).bindPopup('<b>Goeblange</b><br>', commonPopupConfig),
    L.marker([50.144875, 5.847911]).bindPopup('<b>Cherain-Brisy</b><br>', commonPopupConfig),
    L.marker([49.481003, 6.083492]).bindPopup('<b>Dudelange</b><br>', commonPopupConfig),
    L.marker([49.567909444370024, 6.364009724092962]).bindPopup('<b>Stadtbredimus/Palzem</b><br>', commonPopupConfig),
    L.marker([49.74749641273402, 6.330077606029646]).bindPopup('<b>Altrier</b><br>', commonPopupConfig),
    L.marker([49.879444, 6.289444]).bindPopup('<b>Wallendorf</b><br>', commonPopupConfig),
    L.marker([49.84211179910747, 6.423807368700288]).bindPopup('<b>Arantia (Ernzen)</b><br>', commonPopupConfig),
    L.marker([50.180147, 6.914683]).bindPopup('<b>Steineberg</b><br>', commonPopupConfig),
    L.marker([49.564722, 6.559722]).bindPopup('<b>Kastel-Staadt</b><br>', commonPopupConfig),
];

function buildPopupHtml(
    {
        title,
        description = '',
        imageHref = '',
        imageAltText = '',
        imageCredit = '',
        furtherLinks = [],
    } = {}
) {
    let popupHtml = `<h4>${title}</h4>`;
    if (description) {
        popupHtml += `<p>${description}</p>`;
    }
    if (imageHref) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('popup-image-container');
        const img = document.createElement('img');
        img.alt = imageAltText ?? "Unfortunately there is no description for this image.";
        img.src = imageHref;
        img.setAttribute('rel', 'noopener noreferrer');
        img.setAttribute('target', '_blank');
        img.classList.add('popup-image');
        const anchor = document.createElement('a');
        anchor.href = imageHref;
        anchor.appendChild(img);
        imageContainer.appendChild(anchor);
        if (imageCredit) {
            const credit = document.createElement('small');
            credit.innerHTML = `<em class="emphasis-secondary">${imageCredit}</em>`;
            imageContainer.appendChild(credit);
        }
        popupHtml += imageContainer.outerHTML;
    }

    if (furtherLinks.length > 0) {
        popupHtml += `<p>`;
        furtherLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.innerText = link.text;
            popupHtml += anchor.outerHTML;
        });
        popupHtml += `</p>`;
    }

    return popupHtml;
}

// Add all markers to the map
const markerGroup = L.featureGroup(markers).addTo(map);

// Adjust the map view to fit all markers comfortably
map.fitBounds(markerGroup.getBounds());