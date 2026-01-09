export const TYPE_PLACE = 'place';
export const TYPE_ARCHITECTURE = 'architecture';
export const TYPE_OBJECT = 'object';
export const TYPE_DOCUMENT = 'document';
export const TYPE_EVENT = 'event';
export const TYPE_IMMATERIAL = 'immaterial';
export const TYPE_OTHER = 'other';

export function getPlaces(language = "en") {
    if (language === "de") {
        return PLACES_DE;
    } else {
        return PLACES_EN;
    }
}

const PLACES_EN = [
    {
        coordinates: [49.7596, 6.6439],
        ancientName: 'Augusta Treverorum',
        modernName: 'Trier',
    },
    {
        coordinates: [49.814444, 6.421389],
        ancientName: 'Epternācum',
        modernName: 'Echternach',
        description: `
                The valley of Echternach has already been inhabited in the Celtic La Tène period,
                during the last centuries BCE. In the first century CE, one of the largest Roman
                villas of the northwest provinces of the Empire was constructed there.
                Another important factor for the history of the region was the imperial abbey
                <span class="emphasis-other">(Reichsabtei Echternach)</span>,
                founded by St Willibrord in 698. Willibrord hailed from
                Northumbria and received his training at the Irish monastery of Rathmelsigi.
                He is known as the "apostle of the Frisians" and bishop of Utrecht. He died at
                Echternach on 7 November 739. The saint was accompanied by Irish scribes, a fact
                apparent from illuminated books preserved and produced at the local scriptorium.
                A Latin manuscript from the ninth century, kept in Paris today
                (BNF Paris lat. 10290), a grammar of Priscian in insular script, contains Old Irish
                and Old Breton glosses, which belong to the oldest of their kind.
                The name <em class="emphasis-primary">Echternach</em> goes back to
                <em class="emphasis-ancient-name" aria-label="ancient name">Epternācum</em>, derived from the personal name
                <em class="emphasis-linguistic" aria-label="linguistic">Epternos</em>, which is known, in its Latin form
                <em class="emphasis-linguistic" aria-label="linguistic">Epternus</em>, from a local inscription.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_DOCUMENT],
        shortInfo: 'Roman Villa',
        images: [
            {
                title: 'Echternach Roman Villa',
                href: 'https://upload.wikimedia.org/wikipedia/commons/8/80/EchternachRomanVilla.jpg',
                altText: 'Echternach Roman Villa',
                imageBy: 'David Edgar',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:David_Edgar',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
        furtherLinks: [
            {
                text: 'The Priscian grammar (BNF Paris lat. 10290, f. 3r)',
                href: 'http://gallica.bnf.fr/ark:/12148/btv1b84790031/f9.item'
            }
        ],
    },
    {
        coordinates: [49.30221951295557, 6.848619912641792],
        modernName: 'Elm-Sprengen (Sauwasen)',
        description: `
                In a stretch of the "European Celtic Route" in the forest of Herchenbach, four burial
                mounds were found, containing grave goods of the late Hallstatt period (5th century BCE,
                Ha D). One of the mounds has been reconstructed as a recognizable hillock in 2005, a
                wagon tomb (mound 3) in vertical section in 2007. In the wooden burial chamber, the
                wagon can be seen, besides a dummy of the deceased and examples of grave goods, which
                were not preserved at this site except for a golden earring.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Celtic burial mounds',
    },
    {
        coordinates: [50.35669146049006, 7.588382581952168],
        modernName: 'Koblenz',
    },
    {
        coordinates: [49.62559683321979, 7.914808023342875],
        modernName: 'Donnersberg',
    },
    {
        coordinates: [49.606111, 5.075556],
        ancientName: 'Mosomagos',
        modernName: 'Mouzon',
        description: `
                The village in the French department Ardennes is situated on the western border of
                the Treveran territory, itself already being part of the polity of the Remi. During
                the Celtic period, there was a harbour and certainly a ferry service across the
                river Meuse. In the Roman period, the settlement was expanded to a
                <em class="emphasis-roman-site" aria-label="roman-site">vicus</em> on the road from Reims to Trier (Trèves).
                The village probably appears on the famous road map, Tabula Peutingeriana, from the
                fourth century under the entry "Mosa". Approximately 3 km to the southeast of
                Mouzon, in the "Bois de Flavier", a Gallo-Roman sanctuary, a
                <em class="emphasis-roman-site" aria-label="roman-site">Fanum</em>, was found and excavated in 1967. The
                foundation walls of the temple site have been preserved. The sanctuary had a Celtic
                predecessor as well as an earlier Roman one from the era of Augustus. A number of
                weapons in miniature were found on the site, which were used as offerings in the
                first century CE. The name <em class="emphasis-primary">Mouzon</em> goes back to
                Celtic *<em class="emphasis-linguistic" aria-label="linguistic">Moso-magos</em>, 'Meuse field'.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Gallo-Roman sanctuary',
        images: [
            {
                title: 'Excavation site of the Gallo-Roman sanctuary in Mouzon',
                href: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Mouzon_%2808_Ardennes%29_-_Site_Gallo-Romain_du_Flavier_%E2%80%93_lieu_de_culte_%E2%80%93_le_Fanum_-_Photo_Francis_Neuvens_lesardennesvuesdusol.fotoloft.fr.JPG',
                altText: 'Excavation site of the Gallo-Roman sanctuary in Mouzon',
                imageBy: 'Francis Neuvens',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:NEUVENS_Francis',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
        furtherLinks: [
            {
                text: 'Wikipedia: Tabula Peutingeriana',
                href: 'https://en.wikipedia.org/wiki/Tabula_Peutingeriana',
            },
        ],
    },
    {
        coordinates: [50.178333, 5.665],
        modernName: 'Bérismenil',
        description: `
                On a rocky promontory above the river Ourthe, called "Le Cheslé", a large fortification of
                about 13 hectares has been constructed. It was in use from the fifth century BCE on
                (LT A and B). It has a double rampart system of more than 1.7 km length. The access was
                originally in the north and later on a little more to the northwest. All other sides are
                protected by steep slopes. There have been excavations from the 1960s on, and in 1980, part
                of the rampart has been reconstructed. Most probably, Le Cheslé is just outside the
                territory of the Treveri.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Celtic fortification',
        images: [
            {
                title: 'Reconstruction of the gate at Bérismenil',
                href: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Reconstitution_porte.JPG',
                altText: 'Reconstruction of the gate at Bérismenil',
                imageBy: 'Anabase4',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:Anabase4',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [50.33922878806975, 7.439752298915589],
        modernName: 'Goloring (Bassenheim)',
    },
    {
        coordinates: [49.803333, 5.205],
        ancientName: 'Casaecongidunus',
        modernName: 'Cugnon',
        description: `
                "Le Trînchi" near Cugnon is a fortification of the late Hallstatt
                (c. 500 BCE, Ha D) and the middle La Tène periods (c. 250 BCE, LT C). The rampart,
                which has been reconstructed up to a length of 50 m, is assigned to the type 
                "Altkönig-Preist". The place name is recorded in c. 644 as 
                <em class="emphasis-ancient-name" aria-label="ancient name">Casaecongidunus</em>, 'in the house of Congidunus',
                casae being a precursor of French chez. The personal name has been compared to
                Brittonic <em class="emphasis-linguistic" aria-label="linguistic">Cogidubnus</em>.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Celtic fortification',
    },
    {
        coordinates: [49.411389, 5.230278],
        modernName: 'Lion-devant-Dun',
        description: `
                East of the modern village in the department Meuse, there is an elongated ridge
                with an oppidum of approximately 18 hectares on top of it. The southern flank is
                protected by a rampart, which is still up to 6 m high. In front of the wall, two
                ditches of c. 10 m width have been constructed. Sondages revealed pottery of the
                late La Tène period (1st century BCE, LT D) and of the Roman imperial period (3rd
                to 4th centuries CE). The name "Lion" derives from Latin
                <em class="emphasis-linguistic" aria-label="linguistic">Ad Leones</em>.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Celtic oppidum',
    },
    {
        coordinates: [49.91561284272628, 5.377023740733322],
        modernName: 'Libramont-Chevigny',
        descriptionTitle: 'Musée des Celtes',
        description: `
                The "Museum of the Celts" is dedicated to the the study of the Celtic culture in
                the Ardennes. It intends to unite numerous small collections, to add new items,
                especially from the research carried out by the <span class="emphasis-other">
                Centre de Recherches Archéologiques en Ardenne</span>, to preserve the findings and
                to present them to the public. The Museum lays particular emphasis on the correction
                of current stereotypes and prejudices about the Celts. Among others, it houses
                findings from Bérismenil, Cherain-Brisy and Cugnon.
            `,
        types: [TYPE_OBJECT, TYPE_OTHER],
        shortInfo: 'Museum of the Celts',
    },
    {
        coordinates: [49.5675, 5.5325],
        ancientName: 'Verdūnum',
        modernName: 'Virton',
    },
    {
        coordinates: [50.248259232415485, 7.446738062884804],
        ancientName: '*Alkenā',
        modernName: 'Alken',
    },
    {
        coordinates: [49.848582, 7.392168],
        modernName: 'Bundenbach',
        descriptionTitle: 'Altburg near Bundenbach',
        description: `
                The open air museum Altburg shows the reconstruction of a small Celtic fortification,
                as it might have looked like in the second and first centuries BCE.
                The building complex was excavated between 1971 and 1974 by Rheinisches Landesmuseum
                Trier. The second of the three building phases has been reconstructed on the site.
                It is part of re-enactment events such as the "Altburg Festival", with a
                "Celtic fair" and a music festival each year in August, see Altburgfestival 
                (<span class="emphasis-other">in German</span>). For part of the year, the
                settlement is inhabited by modern "Celtic" enthusiasts.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_EVENT],
        shortInfo: 'Celtic fortification',
        images: [
            {
                title: 'Reconstruction of the Altburg near Bundenbach',
                href: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Altburg_plateau.jpg',
                altText: 'Reconstruction of the Altburg near Bundenbach',
                imageBy: 'Chris mz',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.82548182583125, 7.298186249122467],
        modernName: 'Hottenbach'
    },
    {
        coordinates: [50.17835793056453, 7.286190842781618],
        modernName: 'Martberg'
    },
    {
        coordinates: [49.61510671168662, 7.187182191804576],
        modernName: 'Hoppstädten-Weiersbach'
    },
    {
        coordinates: [49.855393504521366, 7.164632626566603],
        ancientName: 'Belgīnum',
        modernName: 'Wederath',
        descriptionTitle: 'Archäologiepark Belginum',
        description: `
                The museum near Morbach shows the findings of a Roman village, the
                <em class="emphasis-ancient-name" aria-label="ancient name">vicus Belginum</em>, its burial ground, a 
                Gallo-Roman temple complex and a Roman military camp.
                The necropolis is particularly interesting, as its tombs date from the long period
                between c. 400 BCE to 400 CE. The name <em class="emphasis-primary">Belginum</em>
                derives from the personal name (and ethnonym) Belgos, which probably means 'with a
                swell of pride', from Proto-Indo-European
                <em class="emphasis-linguistic" aria-label="linguistic">*bʰelgʰ-</em> 'swell'.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Archaeology Park Belginum',
        images: [
            {
                title: 'Archaeologiepark Belginum',
                href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Archaeologiepark_Belginum.jpg/1920px-Archaeologiepark_Belginum.jpg',
                altText: 'Archaeologiepark Belginum',
                imageBy: 'MSeses',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:MSeses',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.751332, 7.204774],
        modernName: 'Allenbach'
    },
    {
        coordinates: [49.99312013585362, 7.108027612129568],
        modernName: 'Kröv',
        descriptionTitle: 'Burgberg',
        description: `
                The <em class="emphasis-primary">Burgberg</em> near Kröv is a spur fortification
                of the Hunsrück-Eifel culture (HEK I), which was constructed around 500 BCE.
                On three sides, the plateau is secured by steep slopes. To the north-east, two
                sectional walls with narrow passages have been erected, which enclose a usable 
                area of about 6000 square metres. In the north-west corner, the wall continues
                about 60 m for no apparent reason. Pottery and a socketed axe have been found on
                the site. The name <em class="emphasis-primary">Kröv</em>, known from documents of
                the years 747 to 751 in copies of 1222, was Crovia, from a word for
                'crooked terrain, hill flank', Proto-Indo-European
                <em class="emphasis-linguistic" aria-label="linguistic">*krou̯-</em> (IEW 938), cf. the French toponym Crouy.
                Another derivative, <em class="emphasis-linguistic" aria-label="linguistic">*krou̯ko-</em>, 'heap, hill'
                is widespread in modern Celtic languages such as Irish
                <em class="emphasis-linguistic" aria-label="linguistic">cruach</em>,
                Welsh <em class="emphasis-linguistic" aria-label="linguistic">crug</em>.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Burgberg',
    },
    {
        coordinates: [49.97043087904943, 7.054190197900325],
        modernName: 'Kinheim-Kindel',
        description: `
                In the wine producing village on the Moselle, a representation of the Gallo-Roman
                god Sucellus in high relief was found in a villa complex in 1976. It measures
                80 cm in height and dates to the third century CE. A copy of the effigy and the
                foundation walls of the villa can be seen on the spot, other architectural remains
                have been covered with earth to protect them. Sucellus is shown with a beard and
                with a mallet, grapes and barrels. He was a Celtic god, venerated as a deity of the
                woods and of fertility. In the Gallo-Roman period, he was primarily a divinity of
                viticulture. The name <em class="emphasis-primary">Sucellus</em> probably means
                "he who strikes well", from Celtic <em class="emphasis-linguistic" aria-label="linguistic">*su-</em> 'good'
                and <em class="emphasis-linguistic" aria-label="linguistic">*kell-</em>, from Proto-Indo-European
                <em class="emphasis-linguistic" aria-label="linguistic">*kelh₂-</em> 'to strike'.
            `,
        types: [TYPE_OBJECT],
        shortInfo: 'Representation of Sucellus',
        images: [
            {
                title: 'Representation of the Gallo-Roman god Sucellus',
                href: 'https://www.uni-trier.de/fileadmin/forschung/projekte/ZAT/CEL/Sucellus_2.jpeg',
                altText: 'Representation of the Gallo-Roman god Sucellus',
                imageBy: 'Forum Celtic Studies',
                imageByLink: 'https://www.uni-trier.de/forschung/zat/celtic-studies/start',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
    },
    {
        coordinates: [49.98560180938939, 7.022102376678921],
        ancientName: '*Arduenā',
        modernName: 'Erden',
        descriptionTitle: 'Borberg (Burgberg)',
        description: `
                The "Borberg" or "Burgberg" north of Erden, on the opposite bank of the river
                Moselle, drops steeply towards the valley. On top of it, there is a fortification
                enclosing an area of about 3 hectares. It is secured by a semicircular sectional
                wall on its north side, a <em class="emphasis-other">Pfostenschlitzmauer</em>
                ("post-slit-wall") that was erected in two phases. Oak wood from a rectangular post
                structure of approximately 5 x 8 m on the highest point date from around 67 BCE.
                Pottery from this enclosure shows middle and late La Tène dates (LT C, c. 250 to
                150 BCE and LT D, c. 150 to 15 BCE), although the first occupation may have already
                started in the fourth century BCE. The mountain top was shortly inhabited during the
                Roman period in the third century CE. The name
                <em class="emphasis-primary">Erden</em> and the first element of the river name
                <em class="emphasis-primary">Erdgemund</em> both go back to
                <em class="emphasis-ancient-name" aria-label="ancient name">*Arduena</em> 'at the high mountain', derived from
                the adjective <em class="emphasis-linguistic" aria-label="linguistic">*arduo-</em> 'high'. The copy of a
                document from Echternach of 774/775 reads
                <span class="emphasis-quote">super fluvio Muselle in monte Ardinigo</span>
                "above the river Moselle on mount Ard(u)inius".
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Burgberg',
        images: [
            {
                title: 'The Borberg from the west',
                href: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Burgberg_von_Westen.JPG',
                altText: 'The Borberg from the west',
                imageBy: 'IMercileZz',
                license: 'CC-BY-SA-4.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0/',
            }
        ],
    },
    {
        coordinates: [49.62215672921777, 7.002182760164149],
        modernName: 'Otzenhausen',
    },
    {
        coordinates: [49.48298166460118, 7.031079347856441],
        modernName: 'Tholey'
    },
    {
        coordinates: [49.57965, 6.91395],
        ancientName: '*Lustarā',
        modernName: "Wadern-Oberlöstern",
        description: `
                 In the vicinity of early Celtic burial mounds, two Gallo-Roman monumental tumuli
                 dating from the second or third century CE were excavated from 1991 to 1995.
                 These representative buildings with a diametre of 20 m were framed by square
                 settings of sandstones and crowned by pine-cones of stone. The hill shape is
                 untypical of the period. The name <em class="emphasis-primary">Wadern</em>,
                 attested as <em class="emphasis-ancient-name" aria-label="ancient name">Waderella</em> in a document of 950
                 CE, derives from late Gaulish <em class="emphasis-linguistic" aria-label="linguistic">*u̯adr-ellā</em>
                 'little water' and ultimately from Proto-Indo-European
                 <em class="emphasis-linguistic" aria-label="linguistic">*u̯odr̥-, u̯edōr</em> 'water' and the diminutive suffix
                 <em class="emphasis-linguistic" aria-label="linguistic">*-ellā</em>; the vowel
                 <span class="emphasis-linguistic">o</span> changes to
                 <span class="emphasis-linguistic">a</span> after the half vowel
                 <span class="emphasis-linguistic">u̯</span> as in Gaulish and Brittonic in general.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Monumental tumulus',
        images: [
            {
                title: 'Monumental tumulus in Wadern-Oberlöstern',
                href: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Wadern_Oberl%C3%B6stern_Gr%C3%A4ber.JPG',
                altText: 'Monumental tumulus in Wadern-Oberlöstern',
                imageBy: 'L. Sieht',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.5562537385328, 6.819946421895424],
        modernName: 'Weiskirchen',
    },
    {
        coordinates: [49.336344309886925, 6.606950190519136],
        ancientName: '*Enjā',
        modernName: 'Ihn',
        descriptionTitle: 'Sudelfels water sanctuary',
        description: `
                Near Wallerfangen, in the district of Ihn, there is the Gallo-Roman water sanctuary
                "Sudelfels", dating from approximately 150 to 250 CE. The sacred enclosure includes an
                octogonal well building. Findings of figurines and inscriptions indicate pilgrimages to
                Gallo-Roman deities such as Rosmerta and Sirona as well as to the supraregionally
                venerated healing god, Apollo. The place name <em class="emphasis-primary">Ihn</em>
                derives from Celtic <em class="emphasis-linguistic" aria-label="linguistic">*en-i̯ā</em> '(spring) with cloudy
                water', from Proto-Indo-European <em class="emphasis-linguistic" aria-label="linguistic">*pen-</em> 'mud, swamp',
                cf. Gaulish <em class="emphasis-linguistic" aria-label="linguistic">anam</em> 'swamp' from
                <em class="emphasis-linguistic" aria-label="linguistic">*pn̥-</em>.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Gallo-Roman water sanctuary',
        images: [
            {
                title: 'Sudelfels water sanctuary',
                href: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Quellheiligtum_sudelfels.jpg',
                altText: 'Sudelfels water sanctuary',
                imageBy: 'Roger Zenner',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:Roger_Zenner',
                license: 'CC-BY-SA-2.0-DE',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/2.0/de/deed.en',
            }
        ],
    },
    {
        coordinates: [49.355776978263634, 6.564342943056346],
        modernName: 'Niedaltdorf',
        description: `
                After the discovery of twelve Celtic tombs dating from the period from c. 600 to c.
                200 BCE (Ha D to LT C), a Celtic farmstead, consisting of a dwelling and a
                storehouse, has been reconstructed from 2003 to 2006. The farmstead is part of the
                "Druid Way", a circular route stretching approximately 6 km on the border of France.
                Each year on 1 May, the Irish spring festival Bealtaine is adapted on the site.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_EVENT],
        shortInfo: 'Celtic farmstead',
    },
    {
        coordinates: [49.473333, 6.608611],
        modernName: 'Merzig-Besseringen',
        description: `
                In the 19th century, a chariot tomb of the La Tène period was found on the hill
                'Müllersknüppchen'. The tomb was equipped with a richly ornamented golden torque,
                bronze fragments of the chariot with ornamental fittings, an Etruscan bronze beak
                flagon and incinerated bone remains of a woman. Unfortunately, most burial objects
                are lost. The torque is still being withheld in Russia as "looted art", the chariot
                fittings are being kept in Rheinisches Landesmuseum Trier.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Chariot tomb',
    },
    {
        coordinates: [49.63448147168677, 5.599712437080059],
        modernName: 'Montauban-Buzenol',
    },
    {
        coordinates: [49.684722, 5.815556],
        ancientName: 'Orolaunum',
        modernName: 'Arlon',
    },
    {
        coordinates: [49.542036032965136, 5.859888862725093],
        modernName: 'Titelberg',
    },
    {
        coordinates: [49.473611, 5.957778],
        modernName: 'Audun-le-tiche',
        description: `
                The small town near Esch-sur-Alzette in Luxemburg hosts interesting finds of the
                Celtic and Roman ages as well as a large cemetery of the Merovingian period. In the
                vicinity of a necropolis of the early Middle Ages at "Le Calvaire" in the
                "Bois de Butte", a Gallo-Roman temple (<em class="emphasis-roman-site" aria-label="roman site">fanum</em>)
                of the second or third century CE was found, whose foundation walls can still be
                seen. Nearby, a group of figures from a Jupiter column 
                (<span class="emphasis-other">cavalier à l'anguipède</span>) came to light. The
                Jupiter columns translate an indigenous Celtic mythological motif into Roman
                imagery. Heads from statues, probably of Juno, and of Minerva with a helmet were
                also unearthed in the area. A Roman inscription from Rue de Bétiel shows a number
                of Celtic names, including Solitumarus, Sorina, Carantillus und Carassouna. These
                names, superficially adapted to the Latin language by changing the original ending
                <span class="emphasis-linguistic">-os</span> to <span class="emphasis-linguistic">-us</span>, 
                show clearly how strong the Celtic language remained in the onomastics of the
                region. The findings can be viewed at the Musée d’Archéologie et d'Histoire locale.
                The cemetary and the fanum belong to an archeological site.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Gallo-Roman temple and Merovingian cemetery',
        images: [
            {
                title: 'Tomb in the Merovingian cemetery of Audun-le-Tiche',
                href: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Tombe_de_la_n%C3%A9cropole_d%27Audun-le-Tiche.jpg',
                altText: 'Tomb in the Merovingian cemetery of Audun-le-Tiche',
                imageBy: 'Aimelaime',
                imageByLink: 'https://fr.wikipedia.org/wiki/Utilisateur:Aimelaime',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
    },
    {
        coordinates: [49.666667, 5.966667],
        modernName: 'Goeblange'
    },
    {
        coordinates: [50.144875, 5.847911],
        modernName: 'Cherain-Brisy'
    },
    {
        coordinates: [49.481003, 6.083492],
        modernName: 'Dudelange',
        descriptionTitle: 'Festival "Zeltik" in Dudelange',
        description: `
                Each year since 1998, mostly in March, the Celtic Celebration takes place in
                Dudelange (Diddeleng, Düdelingen). It has developed into a major attraction far
                beyond the local region. Internationally renowned representatives of the
                "Celtic" music scene regularly appear on stage such as Carlos Núñez, Moya Brennan,
                Capercaillie, Beoga, Tri Yann, Red Cardell etc.
            `,
        types: [TYPE_EVENT],
        shortInfo: 'Celtic Celebration',
        images: [
            {
                title: 'Bagad Naoned de Nantes at Celtic Celebration (Zeltik)',
                href: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Zeltik_Dudelange.jpg',
                altText: 'Zeltik Festival in Dudelange',
                imageBy: 'MMFE',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:MMFE',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.567909444370024, 6.364009724092962],
        modernName: 'Stadtbredimus (L)/Palzem (D)',
        description: `
                In a construction pit, remains of oak poles from different buildung phases were
                excavated. Thicker posts belong to a Roman bridge built about 30 CE. Between them,
                thinner stakes with a diametre of approximately 20 cm and cutting dates of 168 and
                149 BCE (middle La Tène period, LT C) have been found.
                The name <em class="emphasis-primary">Bredimus</em> derives from Celtic
                <em class="emphasis-linguistic" aria-label="linguistic">*bred-īnā</em> '(place where) one wades' from
                Proto-Indo-European <em class="emphasis-linguistic" aria-label="linguistic">*bʰredʰ-</em> 'to wade',
                obviously an old name of a ford.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Celtic bridge',
    },
    {
        coordinates: [49.74749641273402, 6.330077606029646],
        modernName: 'Altrier',
        description: `
                The Celtic burial mound with a diametre of 50 m was discovered in 1972. It was
                constructed around 430 BCE, as dendrodates of wooden beams from the burial chamber
                revealed. An iron sword, a golden bracelet and a fibula, a bronce bucket and
                remains of the cremation were found, which are being kept in the
                Musée Nationale d'Histoire et d'Art de Luxembourg.
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Celtic burial mound',
        images: [
            {
                title: 'Altrier burial mound',
                href: 'https://www.uni-trier.de/fileadmin/forschung/projekte/ZAT/CEL/Altrier_Tumulus.JPG',
                altText: 'Altrier burial mound',
                imageBy: 'Forum Celtic Studies',
                imageByLink: 'https://www.uni-trier.de/forschung/zat/celtic-studies/start',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
        furtherLinks: [
            {
                text: `Musée Nationale d'Histoire et d'Art de Luxembourg`,
                href: 'https://www.mnaha.lu/en/',
            }
        ],
    },
    {
        coordinates: [49.879444, 6.289444],
        modernName: 'Wallendorf',
    },
    {
        coordinates: [49.841324, 6.426349],
        ancientName: '*Arantiā',
        modernName: 'Ernzen',
    },
    {
        coordinates: [50.180147, 6.914683],
        modernName: 'Steineberg',
    },
    {
        coordinates: [49.564722, 6.559722],
        modernName: 'Kastel-Staadt',
        description: `
                The Celtic oppidum, a fortified urban settlement on the plateau above the river
                Saar, has an inner surface of 30 hectares. The walls are still up to c. 7 m high.
                The oppidum was in use from at least around 100 BCE. Settlement findungs have been
                made near the modern church. Potsherds and Celtic gold and silver coins are known
                from all over the area. In the Roman period, a theatre was constructed on one of the
                steeply sloping hill-sides.
                Freudenburg to the south-west of Kastel-Staadt had an old name "Usme", in 1052 
                Ossima", which derives from Gaulish <em class="emphasis-linguistic" aria-label="linguistic">*Uxsamā</em>
                "highest (place), height".
            `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Celtic oppidum',
    },
];

const PLACES_DE = [
    {
        coordinates: [49.7596, 6.6439],
        ancientName: 'Augusta Treverorum',
        modernName: 'Trier',
    },
    {
        coordinates: [49.814444, 6.421389],
        ancientName: 'Epternācum',
        modernName: 'Echternach',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_DOCUMENT],
        shortInfo: 'Römische Villa',
        images: [
            {
                title: 'Echternach, römische Villa',
                href: 'https://upload.wikimedia.org/wikipedia/commons/8/80/EchternachRomanVilla.jpg',
                altText: 'Echternach, römische Villa',
                imageBy: 'David Edgar',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:David_Edgar',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
        furtherLinks: [
            {
                text: 'The Priscian grammar (BNF Paris lat. 10290, f. 3r)',
                href: 'http://gallica.bnf.fr/ark:/12148/btv1b84790031/f9.item'
            }
        ],
    },
    {
        coordinates: [49.30221951295557, 6.848619912641792],
        modernName: 'Elm-Sprengen (Sauwasen)',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: '',
    },
    {
        coordinates: [50.35669146049006, 7.588382581952168],
        modernName: 'Koblenz',
    },
    {
        coordinates: [49.62559683321979, 7.914808023342875],
        modernName: 'Donnersberg',
    },
    {
        coordinates: [49.606111, 5.075556],
        ancientName: 'Mosomagos',
        modernName: 'Mouzon',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Gallo-Römisches Heiligtum',
        images: [
            {
                title: '',
                href: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Mouzon_%2808_Ardennes%29_-_Site_Gallo-Romain_du_Flavier_%E2%80%93_lieu_de_culte_%E2%80%93_le_Fanum_-_Photo_Francis_Neuvens_lesardennesvuesdusol.fotoloft.fr.JPG',
                altText: '',
                imageBy: 'Francis Neuvens',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:NEUVENS_Francis',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
        furtherLinks: [
            {
                text: 'Wikipedia: Tabula Peutingeriana',
                href: 'https://en.wikipedia.org/wiki/Tabula_Peutingeriana',
            },
        ],
    },
    {
        coordinates: [50.178333, 5.665],
        modernName: 'Bérismenil',
        administrativeDivision: "La Roche-en-Ardenne, Prov. Luxembourg, B",
        objects: [
            {
                name: 'Befestigung',
                culture: 'Latènekultur',
                period: '5.–4. Jh. v. Chr.',
            }
        ],
        descriptionTitle: 'Befestigung, "Le Cheslé"',
        description: `
            Auf einem Felsvorsprung oberhalb des Flusses Ourthe, „Le Cheslé“ genannt, wurde eine
            große Festung von etwa 13 Hektar errichtet. Sie war ab dem 5. Jahrhundert v. Chr. in
            Betrieb (LT A und B). Sie hat ein doppeltes Wallsystem von mehr als 1,7 km Länge. Der
            Zugang lag ursprünglich im Norden und später etwas weiter nordwestlich. Alle anderen
            Seiten sind durch steile Hänge geschützt. Seit den 1960er Jahren fanden Ausgrabungen
            statt, und 1980 wurde ein Teil des Walls rekonstruiert. Höchstwahrscheinlich liegt
            Le Cheslé knapp außerhalb des Territoriums der Treverer.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Keltische Befestigung',
        images: [
            {
                title: 'Rekonstruktion des Tores bei Bérismenil',
                href: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Reconstitution_porte.JPG',
                altText: 'Rekonstruktion des Tores bei Bérismenil',
                imageBy: 'Anabase4',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:Anabase4',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [50.33922878806975, 7.439752298915589],
        modernName: 'Goloring (Bassenheim)',
    },
    {
        coordinates: [49.803333, 5.205],
        ancientName: 'Casaecongidunus',
        modernName: 'Cugnon',
        administrativeDivision: "Prov. Luxembourg, B",
        objects: [
            {
                name: 'Befestigung',
                culture: 'a) späte Hallstattkultur (Ha D), b) und mittlere Latènekultur (LT C)',
                period: 'a) ca. 500 v. Chr., b) ca. 250 v. Chr.',
                visibility: 'rekonstruiert',
            },
            {
                name: 'Ortsname',
            }
        ],
        descriptionTitle: 'Befestigung „Le Trînchi“ und Ortsname Cugnon',
        description: `
            1. „Le Trînchi“ bei Cugnon ist eine Befestigungsanlage der späten Hallstattzeit und der
            mittleren La-Tène-Zeit. Der bis auf eine Länge von 50 m rekonstruierte Wall wird dem
            Typus „Altkönig-Preist“ zugeordnet.
            2. Der Ortsname ist um 644 als
            <em class="emphasis-ancient-name" aria-label="ancient name">Casaecongidunus</em>,
            „im Haus des Congidunus“, belegt, wobei
            <em class="emphasis-linguistic" aria-label="linguistic">casae</em> ein Vorläufer des
            französischen <em class="emphasis-linguistic" aria-label="linguistic">chez</em> ist.
            Der Personenname wurde mit dem britannischen
            <em class="emphasis-linguistic" aria-label="linguistic">Cogidubnus</em> verglichen.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_IMMATERIAL],
        shortInfo: 'Keltische Befestigung',
    },
    {
        coordinates: [49.411389, 5.230278],
        modernName: 'Lion-devant-Dun',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Keltisches oppidum',
    },
    {
        coordinates: [49.91561284272628, 5.377023740733322],
        modernName: 'Libramont-Chevigny',
        descriptionTitle: 'Musée des Celtes',
        description: ``,
        types: [TYPE_OBJECT, TYPE_OTHER],
        shortInfo: '',
    },
    {
        coordinates: [49.5675, 5.5325],
        ancientName: 'Verdūnum',
        modernName: 'Virton',
    },
    {
        coordinates: [50.248259232415485, 7.446738062884804],
        ancientName: '*Alkenā',
        modernName: 'Alken',
    },
    {
        coordinates: [49.848582, 7.392168],
        modernName: 'Bundenbach',
        descriptionTitle: 'Altburg nahe Bundenbach',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_EVENT],
        shortInfo: 'Celtic fortification',
        images: [
            {
                title: 'Rekonstruktion der Altburg nahe Bundenbach',
                href: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Altburg_plateau.jpg',
                altText: 'Rekonstruktion der Altburg nahe Bundenbach',
                imageBy: 'Chris mz',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.82548182583125, 7.298186249122467],
        modernName: 'Hottenbach'
    },
    {
        coordinates: [50.17835793056453, 7.286190842781618],
        modernName: 'Martberg'
    },
    {
        coordinates: [49.61510671168662, 7.187182191804576],
        modernName: 'Hoppstädten-Weiersbach'
    },
    {
        coordinates: [49.855393504521366, 7.164632626566603],
        ancientName: 'Belgīnum',
        modernName: 'Wederath',
        descriptionTitle: 'Archäologiepark Belginum',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Archäologiepark Belginum',
        images: [
            {
                title: 'Archäologiepark Belginum',
                href: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Archaeologiepark_Belginum.jpg/1920px-Archaeologiepark_Belginum.jpg',
                altText: 'Archäologiepark Belginum',
                imageBy: 'MSeses',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:MSeses',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.751332, 7.204774],
        modernName: 'Allenbach',
        administrativeDivision: "Lkr. Birkenfeld, RLP",
        objects: [
            {
                name: "Ringwall",
                culture: "Ältere Hunsrück-Eifel-Kultur (HEK I)",
                period: "um 500 v. Chr.",
                visibility: "Gut erhalten, ein Modell des Ringwalls ist im Rheinischen Landesmuseum in Trier zu besichtigen.",
            },
        ],
        descriptionTitle: 'Ringwall Allenbach, "Ringkopf"',
        description: `
            Die 650 m hohe Kuppe war zur Anlage einer Befestigung genutzt worden. Die ringförmig
            geführten, sichtbaren Steinwälle sind Ruinen von Steinmauern mit stützendem Holzgerüst.
            Es handelt sich um die älteste Steinarchitektur in der Region. Das einzige Tor lag
            zurückgesetzt an der stärker befestigten Zugangsseite im Osten und war nur über eine
            34 m lange Torgasse zu erreichen. Der 1 Hektar große Innenraum war nicht dauerhaft
            bewohnt. Wie viele andere zur gleichen Zeit errichtete Anlagen wurde sie nur für wenige
            Jahrzehnte unterhalten und diente als befestigter Stützpunkt.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Ringwall',
        images: [
            {
                title: 'Ringwall',
                href: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ringwall.jpg?20090201180525',
                altText: 'Ringwall Allenbach',
                imageBy: 'Matw',
                imageByLink: 'https://de.wikipedia.org/wiki/Benutzer:Matw',
                license: 'gemeinfrei',
            }
        ],
    },
    {
        coordinates: [49.99312013585362, 7.108027612129568],
        modernName: 'Kröv',
        descriptionTitle: 'Burgberg',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Burgberg',
    },
    {
        coordinates: [49.97043087904943, 7.054190197900325],
        modernName: 'Kinheim-Kindel',
        description: ``,
        types: [TYPE_OBJECT],
        shortInfo: '',
        images: [
            {
                title: 'Representation des Gallo-Römischen Gottes Sucellus',
                href: 'https://www.uni-trier.de/fileadmin/forschung/projekte/ZAT/CEL/Sucellus_2.jpeg',
                altText: 'Representation des Gallo-Römischen Gottes Sucellus',
                imageBy: 'Forum Celtic Studies',
                imageByLink: 'https://www.uni-trier.de/forschung/zat/celtic-studies/start',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
    },
    {
        coordinates: [49.98560180938939, 7.022102376678921],
        ancientName: '*Arduenā',
        modernName: 'Erden',
        descriptionTitle: 'Borberg (Burgberg)',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Burgberg',
        images: [
            {
                title: '',
                href: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Burgberg_von_Westen.JPG',
                altText: '',
                imageBy: 'IMercileZz',
                license: 'CC-BY-SA-4.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0/',
            }
        ],
    },
    {
        coordinates: [49.62215672921777, 7.002182760164149],
        modernName: 'Otzenhausen',
    },
    {
        coordinates: [49.48298166460118, 7.031079347856441],
        modernName: 'Tholey'
    },
    {
        coordinates: [49.57965, 6.91395],
        ancientName: '*Lustarā',
        modernName: "Wadern-Oberlöstern",
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Monumentaler tumulus',
        images: [
            {
                title: '',
                href: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Wadern_Oberl%C3%B6stern_Gr%C3%A4ber.JPG',
                altText: '',
                imageBy: 'L. Sieht',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.5562537385328, 6.819946421895424],
        modernName: 'Weiskirchen',
    },
    {
        coordinates: [49.336344309886925, 6.606950190519136],
        ancientName: '*Enjā',
        modernName: 'Ihn',
        descriptionTitle: 'Sudelfels Wasserheiligtum',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Gallo-Römisches Wasserheiligtum',
        images: [
            {
                title: 'Sudelfels water sanctuary',
                href: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Quellheiligtum_sudelfels.jpg',
                altText: 'Sudelfels water sanctuary',
                imageBy: 'Roger Zenner',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:Roger_Zenner',
                license: 'CC-BY-SA-2.0-DE',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/2.0/de/deed.en',
            }
        ],
    },
    {
        coordinates: [49.355776978263634, 6.564342943056346],
        modernName: 'Niedaltdorf',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_EVENT],
        shortInfo: '',
    },
    {
        coordinates: [49.473333, 6.608611],
        modernName: 'Merzig-Besseringen',
        administrativeDivision: "Lkr. Merzig-Wadern, SL",
        objects: [
            {
                name: "Fürstinnengrab mit Wagenbeigabe",
                culture: "jüngere Hunsrück-Eifel-Kultur / frühe Latènekultur",
                period: "um 500 v. Chr.",
                visibility: "Grab zerstört, Hügel sichtbar",
            },
        ],
        descriptionTitle: 'Fürstinnengrab mit Wagenbeigabe',
        description: `
            Im 19. Jahrhundert wurde auf dem Hügel „Müllersknüppchen“ ein „Fürstinnengrab“ mit
            Wagenbeigabe aus der Latènezeit gefunden. Das Grab war mit einem reich verzierten
            goldenen Halsring, bronzenen Wagenfragmenten mit Zierbeschlägen, einer etruskischen
            Bronzeschnabelkanne und verbrannten Knochenresten einer Frau ausgestattet. Leider sind
            die meisten Grabbeigaben verloren gegangen. Der Halsring wird noch immer in Russland
            als „Beutekunst“ zurückgehalten, die Wagenbeschläge werden im Rheinischen Landesmuseum
            Trier aufbewahrt.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Fürstinnengrab mit Wagenbeigabe',
    },
    {
        coordinates: [49.63448147168677, 5.599712437080059],
        modernName: 'Montauban-Buzenol',
    },
    {
        coordinates: [49.684722, 5.815556],
        ancientName: 'Orolaunum',
        modernName: 'Arlon',
    },
    {
        coordinates: [49.542036032965136, 5.859888862725093],
        modernName: 'Titelberg',
    },
    {
        coordinates: [49.473611, 5.957778],
        modernName: 'Audun-le-tiche',
        administrativeDivision: "Dép. Moselle, F",
        objects : [
            {
                name: "Tempel, Einzelfunde",
                culture: "gallorömisch",
                period: "2./3. Jh. n. Chr.",
                visibility: "Grundmauern sichtbar",
            },
            {
                name: "Inschriften",
                culture: "vorrömisch",
            },
        ],
        descriptionTitle: 'Gallorömischer Tempel (Fanum) und Merowingerzeitliches Gräberfeld',
        description: `
            1. Die kleine Stadt beherbergt interessante Funde aus der keltischen
             und römischen Zeit sowie ein großes Gräberfeld aus der Merowingerzeit. In der Nähe
             einer frühmittelalterlichen Nekropole bei „Le Calvaire“ im „Bois de Butte“ wurde ein
             gallorömischer Tempel (<em class="emphasis-roman-site" aria-label="roman-site">fanum</em>)
             aus dem 2./3. Jahrhundert n. Chr. gefunden, dessen
             Grundmauern noch zu sehen sind. In der Nähe kam eine Gruppe von Figuren einer
             Jupitersäule (<em class="emphasis-other">cavalier à l’anguipède</em>) zum Vorschein. Die Jupitersäulen übersetzen ein
             Motiv aus der keltischen Mythologie in die römische Bildsprache. Köpfe von Statuen,
             wahrscheinlich von Juno, und von Minerva mit Helm wurden ebenfalls in der Gegend
             ausgegraben. Die Funde können im Musée d’Archéologie et d’Histoire locale besichtigt
             werden. Der Friedhof und das Fanum gehören zu einer archäologischen Stätte
             (<em class="emphasis-other">espace archéologique</em>).
            2. Eine römische Inschrift aus der Rue de Bétiel zeigt eine Reihe von keltischen Namen,
            darunter Solitumarus, Sorina, Carantillus und Carassouna. Diese Namen, oberflächlich an
            die lateinische Sprache angepasst, zeigen deutlich, wie stark die keltische Sprache in
            der Onomastik der Region geblieben ist.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: '',
        images: [
            {
                title: 'Nekropole von Audun-le-Tiche',
                href: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Tombe_de_la_n%C3%A9cropole_d%27Audun-le-Tiche.jpg',
                altText: 'Nekropole von Audun-le-Tiche',
                imageBy: 'Aimelaime',
                imageByLink: 'https://fr.wikipedia.org/wiki/Utilisateur:Aimelaime',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
    },
    {
        coordinates: [49.666667, 5.966667],
        modernName: 'Goeblange'
    },
    {
        coordinates: [50.144875, 5.847911],
        modernName: 'Cherain-Brisy'
    },
    {
        coordinates: [49.481003, 6.083492],
        administrativeDivision: "Kanton Esch-sur-Alzette, L",
        modernName: 'Dudelange',
        objects: [
            {
                name: "Keltenfest",
                culture: "Rezeption",
                period: "modern",
                visibility: "interaktiv",
            }
        ],
        descriptionTitle: 'Festival "Zeltik" in Dudelange',
        description: `
            Seit 1998 findet jedes Jahr, meist im März, das Keltenfest „Zeltik“ statt. Der Name ist
            eine Kombination aus „Celtic“ und „Zelt“, weil das Festival bis 2012 in einem Zelt
            abgehalten wurde. Düdelingen hat sich damit zu einem Anziehungspunkt weit über die
            Region hinaus entwickelt. Regelmäßig stehen neben regionalen auch international
            bekannte Vertreter der „keltischen“ Musikszene auf der Bühne wie Carlos Núñez, Moya
            Brennan, Capercaillie, Beoga, Tri Yann, Red Cardell usw.`,
        types: [TYPE_EVENT],
        shortInfo: 'keltisches Fest "Zeltik"',
        images: [
            {
                title: 'Bagad Naoned de Nantes at Celtic Celebration (Zeltik)',
                href: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Zeltik_Dudelange.jpg',
                altText: 'Zeltik Festival in Dudelange',
                imageBy: 'MMFE',
                imageByLink: 'https://commons.wikimedia.org/wiki/User:MMFE',
                license: 'CC-BY-SA-3.0',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0/',
            }
        ],
    },
    {
        coordinates: [49.567909444370024, 6.364009724092962],
        modernName: 'Stadtbredimus (L)/Palzem (D)',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_OBJECT],
        shortInfo: 'Keltische Brücke',
    },
    {
        coordinates: [49.74749641273402, 6.330077606029646],
        modernName: 'Altrier',
        administrativeDivision: "Kant. Echternach, L",
        objects: [
            {
                name: "Grabhügel",
                culture: "Jüngere Hunsrück-Eifel-Kultur",
                period: "ca. 430 v. Chr.",
                visibility: "gut sichtbar",
            },
        ],
        descriptionTitle: `Grabhügel, Gmd. Bech, „Auf der Schanz“ `,
        description: `
            Rund 600 m südwestlich des Ortes wurde 1972 ein Grabhügel mit einem Durchmesser von
            ursprünglich bis zu 51 m und einer Höhe von bis zu 6 m untersucht. Als Grabkammer
            diente eine Truhe aus Eichenholz, von der 70–80 cm erhalten sind. Als Urne diente ein
            bronzener Stamnos, der offenbar mit einem Schaffell abgedeckt wurde, von dem sich Reste
            im Gefäß erhalten haben. Als Beigaben wurden ein goldener Armreif, eine Maskenfibel und
            ein Eisenschwert mit Scheide gefunden, das erst 2025 neu untersucht wurde. Die Funde
            werden im Musée Nationale d’Histoire et d’Art de Luxembourg aufbewahrt.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: '',
        images: [
            {
                title: '',
                href: 'https://www.uni-trier.de/fileadmin/forschung/projekte/ZAT/CEL/Altrier_Tumulus.JPG',
                altText: '',
                imageBy: 'Forum Celtic Studies',
                imageByLink: 'https://www.uni-trier.de/forschung/zat/celtic-studies/start',
                license: 'Public domain',
                licenseLink: 'https://creativecommons.org/public-domain/pdm/',
            }
        ],
        furtherLinks: [
            {
                text: `Musée Nationale d'Histoire et d'Art de Luxembourg`,
                href: 'https://www.mnaha.lu/en/',
            }
        ],
    },
    {
        coordinates: [49.879444, 6.289444],
        modernName: 'Wallendorf',
    },
    {
        coordinates: [49.841324, 6.426349],
        ancientName: '*Arantiā',
        modernName: 'Ernzen',
        administrativeDivision: "Eifelkreis Bitburg-Prüm, RLP",
        objects: [
            {
                name: "Altar mit Inschrift",
                culture: "gallorömisch",
                period: "1. Hälfte 2. Jh.",
                visibility: "Altar mit Aedicula rekonstruiert",
            },
            {
                name: "Ortsname",
                culture: "vorkeltisch",
                period: "2./1. Jahrtausend v. Chr.",
            }
        ],
        descriptionTitle: 'Weihedenkmal und Ortsname',
        description: `
            1. Im Jahr 1964 kam es bei Wegbauarbeiten am nördlichen Ortsrand von Ernzen zur
            Entdeckung von Resten eines Weihedenkmals (Verbleib: RLM Trier). Vor Ort wurde es als
            Altar vor einer Aedicula rekonstruiert. Nach neueren Untersuchungen handelt es sich
            aber um ein einziges Denkmal, wobei auf dem Sockel („Altar“) ein Hochrelief des
            einheimischen Gottes Intarabus, eher als eine Statue, an der Rückwand der Aedicula zu
            sehen gewesen sein dürfte. Die Sockelinschrift nennt neben dem Götternamen nur den
            Weihenden, Lucius Germanius.
            2. Der Ortsname leitet sich von einem Flussnamen „Ernz“ ab, den es heute in der Umgebung
            nur noch in Luxemburg gibt: die Weiße und die Schwarze Ernz, die rechts zur Sauer
            führen. Der Name eines dieser Gewässer ist in einer Urkunde von 876/77 (Kopie 1222) in
            <em class="emphasis-linguistic" aria-label="linguistic">super fluvio Arantia</em>
            genannt. Ernzen selbst erscheint 895 und 915 als 
            <em class="emphasis-linguistic" aria-label="linguistic">Arenza</em>, ab 1095
            als <em class="emphasis-linguistic" aria-label="linguistic">Erinza</em>.
            Die Vorform ist klar
            <em class="emphasis-linguistic" aria-label="linguistic">Arantia</em>, eine
            indogermanische Bildung mit dem
            geläufigen Suffix <em class="emphasis-linguistic" aria-label="linguistic">-antia</em>
            (aus <em class="emphasis-linguistic" aria-label="linguistic">*-n̥t-i̯eh₂</em>) und einer
            schwer bestimmbaren Wurzel (in der Nullstufe). Arantia muss der Name auch in keltischer
            Zeit gelautet haben.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE, TYPE_IMMATERIAL],
    },
    {
        coordinates: [50.180147, 6.914683],
        modernName: 'Steineberg',
    },
    {
        coordinates: [49.564722, 6.559722],
        modernName: 'Kastel-Staadt',
        description: ``,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Keltisches oppidum',
    },
    {
        coordinates: [50.20193, 6.67871],
        modernName: 'Büscheich-Niedereich',
        administrativeDivision: "Lkr. Vulkaneifel, RLP",
        objects: [
            {
                name: "Ringwall",
                culture: "a) Urnenfelderkultur, b) ältere und jüngere Hunsrück-Eifel-Kultur, c) späte Latènekultur",
                period: "a) 13.–9./8. Jh., b) 7.–3. Jh. c) 2./1. Jh. v. Chr.",
                visibility: "gut sichtbar",
            },
        ],
        descriptionTitle: 'Ringwall, "Dietzenley"',
        description: `
            Der Ringwall auf der Dietzenley nahe dem „Keltenpfad“ liegt an der höchsten Stelle des
            Pelmer Waldes. Er umschließt mit einer Gesamtlänge von 250 m und einer maximalen Breite
            von 100 m ca. 16,6 Hektar des Bergplateaus. An seinem Fuß ist er von einem aus grobem
            Vulkangestein bestehenden Steinwall umgeben. Der Zugang lag vermutlich an der
            Nordostseite, kann aber aufgrund eines in neuerer Zeit entstandenen Steinbruchs nicht
            mehr mit Sicherheit bestimmt werden. Am Osthang des Höhenzuges befindet sich eine
            Quelle. Die ältesten Funde datieren in die frühe Bronze- und die Urnenfelderzeit. Die
            Wallanlage ist aber wohl erst im Laufe der Hunsrück-Eifel-Kultur angelegt und,
            vielleicht nur sporadisch, bis in die Spätlatènezeit genutzt worden. Während dieser
            Zeit sind wahrscheinlich auch Mahlsteine aus dem vulkanischen Gestein geschlagen
            worden.
        `,
        types: [TYPE_PLACE, TYPE_ARCHITECTURE],
        shortInfo: 'Ringwall',
    }
];