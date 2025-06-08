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
    L.marker([49.7596, 6.6439]).bindPopup(
        buildPopupHtml({
            title: 'Trier',
        }),
        commonPopupConfig
    ),
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
    L.marker([50.35669146049006, 7.588382581952168]).bindPopup(
        buildPopupHtml({
            title: 'Koblenz',
        }),
        commonPopupConfig
    ),
    L.marker([49.62559683321979, 7.914808023342875]).bindPopup(
        buildPopupHtml({
            title: 'Donnersberg',
        }),
        commonPopupConfig
    ),
    L.marker([49.606111, 5.075556]).bindPopup(
        buildPopupHtml({
            title: 'Mosomagos (Mouzon)',
            description: `
                The village in the French department Ardennes is situated on the western border of
                the Treveran territory, itself already being part of the polity of the Remi. During
                the Celtic period, there was a harbour and certainly a ferry service across the
                river Meuse. In the Roman period, the settlement was expanded to a
                <em class="emphasis-secondary">vicus</em> on the road from Reims to Trier (Trèves).
                The village probably appears on the famous road map, Tabula Peutingeriana, from the
                fourth century under the entry "Mosa". Approximately 3 km to the southeast of
                Mouzon, in the "Bois de Flavier", a Gallo-Roman sanctuary, a
                <em class="emphasis-secondary">Fanum</em>, was found and excavated in 1967. The
                foundation walls of the temple site have been preserved. The sanctuary had a Celtic
                predecessor as well as an earlier Roman one from the era of Augustus. A number of
                weapons in miniature were found on the site, which were used as offerings in the
                first century CE. The name <em class="emphasis-primary">Mouzon</em> goes back to
                Celtic *<em class="emphasis-secondary">Moso-magos</em>, 'Meuse field'.
            `,
            imageHref: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Mouzon_%2808_Ardennes%29_-_Site_Gallo-Romain_du_Flavier_%E2%80%93_lieu_de_culte_%E2%80%93_le_Fanum_-_Photo_Francis_Neuvens_lesardennesvuesdusol.fotoloft.fr.JPG',
            imageAltText: 'Excavation site of the Gallo-Roman sanctuary in Mouzon',
            imageCredit: 'Photo source: commons.wikimedia.org, photo by Francis Neuvens, CC-BY-SA-3.0',
            furtherLinks: [
                {
                    text: 'Wikipedia: Tabula Peutingeriana',
                    href: 'https://en.wikipedia.org/wiki/Tabula_Peutingeriana',
                },
            ]
        }),
        commonPopupConfig
    ),
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
    L.marker([50.33922878806975, 7.439752298915589]).bindPopup(
        buildPopupHtml({
            title: 'Goloring (Bassenheim)',
        }),
        commonPopupConfig,
    ),
    L.marker([49.803333, 5.205]).bindPopup(
        buildPopupHtml({
            title: 'Casaecongidunus (Cugnon)',
            description: `
                "Le Trînchi" near Cugnon is a fortification of the late Hallstatt
                (c. 500 BCE, Ha D) and the middle La Tène periods (c. 250 BCE, LT C). The rampart,
                which has been reconstructed up to a length of 50 m, is assigned to the type 
                "Altkönig-Preist". The place name is recorded in c. 644 as 
                <em class="emphasis-secondary">Casaecongidunus</em>, 'in the house of Congidunus',
                casae being a precursor of French chez. The personal name has been compared to
                Brittonic <em class="emphasis-secondary">Cogidubnus</em>.
            `
        }),
        commonPopupConfig
    ),
    L.marker([49.411389, 5.230278]).bindPopup(
        buildPopupHtml({
            title: 'Lion-devant-Dun',
            description: `
                East of the modern village in the department Meuse, there is an elongated ridge
                with an oppidum of approximately 18 hectares on top of it. The southern flank is
                protected by a rampart, which is still up to 6 m high. In front of the wall, two
                ditches of c. 10 m width have been constructed. Sondages revealed pottery of the
                late La Tène period (1st century BCE, LT D) and of the Roman imperial period (3rd
                to 4th centuries CE). The name "Lion" derives from Latin
                <em class="emphasis-secondars">Ad Leones</em>.
            `,
        }),
        commonPopupConfig),
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
    L.marker([49.5675, 5.5325]).bindPopup(
        buildPopupHtml({
            title: 'Verdūnum (Virton)',
        }),
        commonPopupConfig
    ),
    L.marker([50.248259232415485, 7.446738062884804]).bindPopup(
        buildPopupHtml({
            title: '*Alkenā (Alken)',
        }),
        commonPopupConfig),
    L.marker([49.848582, 7.392168]).bindPopup(
        buildPopupHtml({
            title: 'Bundenbach',
            description: `
                <h4>Altburg near Bundenbach</h4>
                The open air museum Altburg shows the reconstruction of a small Celtic fortification,
                as it might have looked like in the second and first centuries BCE.
                The building complex was excavated between 1971 and 1974 by Rheinisches Landesmuseum
                Trier. The second of the three building phases has been reconstructed on the site.
                It is part of re-enactment events such as the "Altburg Festival", with a
                "Celtic fair" and a music festival each year in August, see Altburgfestival 
                (<em class="emphasis-secondary">in German</em>). For part of the year, the
                settlement is inhabited by modern "Celtic" enthusiasts.
            `,
            imageHref: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Altburg_plateau.jpg',
            imageAltText: 'Reconstruction of the Altburg near Bundenbach',
            imageCredit: 'Photo: Chris mz, CC-BY-SA 3.0',
        }),
        commonPopupConfig
    ),
    L.marker([49.82548182583125, 7.298186249122467]).bindPopup(
        buildPopupHtml({
            title: 'Hottenbach'
        }),
        commonPopupConfig,
    ),
    L.marker([50.17835793056453, 7.286190842781618]).bindPopup(
        buildPopupHtml({
            title: 'Martberg'
        }),
        commonPopupConfig,
    ),
    L.marker([49.61510671168662, 7.187182191804576]).bindPopup(
        buildPopupHtml({
            title: 'Hoppstädten-Weiersbach'
        }),
        commonPopupConfig,
    ),
    L.marker([49.855393504521366, 7.164632626566603]).bindPopup(
        buildPopupHtml({
            title: 'Belgīnum (Wederath; Archäologiepark)',
            description: `
                The museum near Morbach shows the findings of a Roman village, the
                <em class="emphasis-secondary">vicus Belginum</em>, its burial ground, a 
                Gallo-Roman temple complex and a Roman military camp.
                The necropolis is particularly interesting, as its tombs date from the long period
                between c. 400 BCE to 400 CE. The name <em class="emphasis-primary">Belginum</em>
                derives from the personal name (and ethnonym) Belgos, which probably means 'with a
                swell of pride', from Proto-Indo-European
                <em class="emphasis-secondary">*bʰelgʰ-</em> 'swell'.
            `,
            imageHref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Archaeologiepark_Belginum.jpg/1920px-Archaeologiepark_Belginum.jpg',
            imageAltText: 'Archaeologiepark Belginum',
            imageCredit: 'Photo: <a href="https://commons.wikimedia.org/wiki/User:MSeses" target="_blank" rel="noopener noreferrer">MSeses</a>, CC BY-SA 3.0',
        }),
        commonPopupConfig,
    ),
    L.marker([49.75445538415072, 7.166859817310713]).bindPopup(
        buildPopupHtml({
            title: 'Allenbach'
        }),
        commonPopupConfig,
    ),
    L.marker([49.99312013585362, 7.108027612129568]).bindPopup(
        buildPopupHtml({
            title: 'Kröv (Burgberg)',
            description: `
                The <em class="emphasis-secondary">Burgberg</em> near Kröv is a spur fortification
                of the Hunsrück-Eifel culture (HEK I), which was constructed around 500 BCE.
                On three sides, the plateau is secured by steep slopes. To the north-east, two
                sectional walls with narrow passages have been erected, which enclose a usable 
                area of about 6000 square metres. In the north-west corner, the wall continues
                about 60 m for no apparent reason. Pottery and a socketed axe have been found on
                the site. The name <em class="emphasis-primary">Kröv</em>, known from documents of
                the years 747 to 751 in copies of 1222, was Crovia, from a word for
                'crooked terrain, hill flank', Proto-Indo-European
                <em class="emphasis-secondary">*krou̯-</em> (IEW 938), cf. the French toponym Crouy.
                Another derivative, <em class="emphasis-secondary">*krou̯ko-</em>, 'heap, hill'
                is widespread in modern Celtic languages such as Irish
                <em class="emphasis-secondary">cruach</em>,
                Welsh <em class="emphasis-secondary">crug</em>.
            `,
        }),
        commonPopupConfig,
    ),
    L.marker([49.97043087904943, 7.054190197900325]).bindPopup(
        buildPopupHtml({
            title: 'Kinheim-Kindel',
            description: `
                In the wine producing village on the Moselle, a representation of the Gallo-Roman
                god Sucellus in high relief was found in a villa complex in 1976. It measures
                80 cm in height and dates to the third century CE. A copy of the effigy and the
                foundation walls of the villa can be seen on the spot, other architectural remains
                have been covered with earth to protect them. Sucellus is shown with a beard and
                with a mallet, grapes and barrels. He was a Celtic god, venerated as a deity of the
                woods and of fertility. In the Gallo-Roman period, he was primarily a divinity of
                viticulture. The name <em class="emphasis-primary">Sucellus</em> probably means
                "he who strikes well", from Celtic <em class="emphasis-secondary">*su-</em> 'good'
                and <em class="emphasis-secondary">*kell-</em>, from Proto-Indo-European
                <em class="emphasis-secondary">*kelh₂-</em> 'to strike'.
            `,
            imageHref: 'https://www.uni-trier.de/fileadmin/forschung/projekte/ZAT/CEL/Sucellus_2.jpeg',
            imageAltText: 'Representation of the Gallo-Roman god Sucellus',
            imageCredit: 'Photo: Forum Celtic Studies',
        }),
        commonPopupConfig,
    ),
    L.marker([49.98560180938939, 7.022102376678921]).bindPopup(
        buildPopupHtml({
            title: '*Arduenā (Erden; Borberg/Burgberg)',
            description: `
                The "Borberg" or "Burgberg" north of Erden, on the opposite bank of the river
                Moselle, drops steeply towards the valley. On top of it, there is a fortification
                enclosing an area of about 3 hectares. It is secured by a semicircular sectional
                wall on its north side, a <em class="emphasis-secondary">Pfostenschlitzmauer</em>
                ("post-slit-wall") that was erected in two phases. Oak wood from a rectangular post
                structure of approximately 5 x 8 m on the highest point date from around 67 BCE.
                Pottery from this enclosure shows middle and late La Tène dates (LT C, c. 250 to
                150 BCE and LT D, c. 150 to 15 BCE), although the first occupation may have already
                started in the fourth century BCE. The mountain top was shortly inhabited during the
                Roman period in the third century CE. The name
                <em class="emphasis-primary">Erden</em> and the first element of the river name
                <em class="emphasis-primary">Erdgemund</em> both go back to
                <em class="emphasis-secondary">*Arduena</em> 'at the high mountain', derived from
                the adjective <em class="emphasis-secondary">*arduo-</em> 'high'. The copy of a
                document from Echternach of 774/775 reads
                <em class="emphasis-secondary">super fluvio Muselle in monte Ardinigo</em>
                "above the river Moselle on mount Ard(u)inius".
            `,
            imageHref: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Burgberg_von_Westen.JPG',
            imageAltText: 'The Borberg from the west',
            imageCredit: 'Photo: IMercileZz, CC-BY-SA-4.0',
        }),
        commonPopupConfig,
    ),
    L.marker([49.62215672921777, 7.002182760164149]).bindPopup(
        buildPopupHtml({
            title: 'Otzenhausen',
        }),
        commonPopupConfig,
    ),
    L.marker([49.48298166460118, 7.031079347856441]).bindPopup(
        buildPopupHtml({
            title: 'Tholey'
        }),
        commonPopupConfig,
    ),
    L.marker([49.57965, 6.91395]).bindPopup(
        buildPopupHtml({
            title: '*Lustarā (Wadern-Oberlöstern)',
            description: `
                 In the vicinity of early Celtic burial mounds, two Gallo-Roman monumental tumuli
                 dating from the second or third century CE were excavated from 1991 to 1995.
                 These representative buildings with a diametre of 20 m were framed by square
                 settings of sandstones and crowned by pine-cones of stone. The hill shape is
                 untypical of the period. The name <em class="emphasis-primary">Wadern</em>,
                 attested as <em class="emphasis-secondary">Waderella</em> in a document of 950
                 CE, derives from late Gaulish <em class="emphasis-secondary">*u̯adr-ellā</em>
                 'little water' and ultimately from Proto-Indo-European
                 <em class="emphasis-secondary">*u̯odr̥-, u̯edōr</em> 'water' and the diminutive suffix
                 <em class="emphasis-secondary">*-ellā</em>; the vowel
                 <em class="emphasis-secondary">o</em> changes to
                 <em class="emphasis-secondary">a</em> after the half vowel
                 <em class="emphasis-secondary">u̯</em> as in Gaulish and Brittonic in general.
            `,
            imageHref: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Wadern_Oberl%C3%B6stern_Gr%C3%A4ber.JPG',
            imageAltText: 'Monumental tumulus in Wadern-Oberlöstern',
            imageCredit: 'Photo: L. Sieht, CC-BY-SA-3.0',
        }),
        commonPopupConfig,
    ),
    L.marker([49.5562537385328, 6.819946421895424]).bindPopup(
        buildPopupHtml({
            title: '<b>Weißkirchen</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.336344309886925, 6.606950190519136]).bindPopup(
        buildPopupHtml({
            title: '<b>Enja (Ihn; Sudelfels)</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.355776978263634, 6.564342943056346]).bindPopup(
        buildPopupHtml({
            title: '<b>Niedaltdorf</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.355776978263634, 6.564342943056346]).bindPopup(
        buildPopupHtml({
            title: '<b>Merzig-Besseringen</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.63448147168677, 5.599712437080059]).bindPopup(
        buildPopupHtml({
            title: '<b>Buzenol-Montauban</b><br>Montauban-Buzenol?'
        }),
        commonPopupConfig,
    ),
    L.marker([49.684722, 5.815556]).bindPopup(
        buildPopupHtml({
            title: '<b>Orolaunum (Arlon)</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.542036032965136, 5.859888862725093]).bindPopup(
        buildPopupHtml({
            title: '<b>Titelberg</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.473611, 5.957778]).bindPopup(
        buildPopupHtml({
            title: '<b>Audun-le-tiche</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.666667, 5.966667]).bindPopup(
        buildPopupHtml({
            title: '<b>Goeblange</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([50.144875, 5.847911]).bindPopup(
        buildPopupHtml({
            title: '<b>Cherain-Brisy</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.481003, 6.083492]).bindPopup(
        buildPopupHtml({
            title: '<b>Dudelange</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.567909444370024, 6.364009724092962]).bindPopup(
        buildPopupHtml({
            title: '<b>Stadtbredimus/Palzem</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.74749641273402, 6.330077606029646]).bindPopup(
        buildPopupHtml({
            title: '<b>Altrier</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.879444, 6.289444]).bindPopup(
        buildPopupHtml({
            title: '<b>Wallendorf</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.84211179910747, 6.423807368700288]).bindPopup(
        buildPopupHtml({
            title: '<b>Arantia (Ernzen)</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([50.180147, 6.914683]).bindPopup(
        buildPopupHtml({
            title: '<b>Steineberg</b><br>'
        }),
        commonPopupConfig,
    ),
    L.marker([49.564722, 6.559722]).bindPopup(
        buildPopupHtml({
            title: '<b>Kastel-Staadt</b><br>'
        }),
        commonPopupConfig,
    ),
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
        img.classList.add('popup-image');
        const anchor = document.createElement('a');
        anchor.href = imageHref;
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
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