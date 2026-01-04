import { CelticMap } from 'map';

import translations_en from 'translations_en';
import translations_de from 'translations_de';

const TRANSLATIONS = {
	en: translations_en,
	de: translations_de
};

let mapInstance = null;

function setBasicInfoLanguage(lang) {
	const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
	document.getElementById('main-title').textContent = t.mainTitle;
	document.getElementById('service-info').innerHTML = t.serviceInfo;
	document.getElementById('intro-text').textContent = t.introText;
}

document.addEventListener('DOMContentLoaded', () => {
	//const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
	setBasicInfoLanguage("en");

	document.querySelectorAll('.lang-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			setBasicInfoLanguage(btn.dataset.lang);
            updateLanguageButtonVisibility(btn);
            reloadMap(btn.dataset.lang);
		});
	});
});

function reloadMap(language) {
    if (mapInstance) {
        mapInstance.map.remove();
        mapInstance = null;
    }    
    mapInstance = new CelticMap('map', language);
}

function updateLanguageButtonVisibility(btn) {
    document.querySelectorAll('.lang-btn').forEach(b => {
        if (b === btn) {
            b.classList.add('hidden');
        } else {
            b.classList.remove('hidden');
        }
    });
}

mapInstance = new CelticMap('map', "en");