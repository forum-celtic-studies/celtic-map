import { CelticMap } from 'map';

import translations_en from './data/i18n/translatoins_en.js';
import translations_de from './data/i18n/translations_de.js';

const TRANSLATIONS = {
	en: translations_en,
	de: translations_de
};

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
            emitLanguageChangeEvent(btn);
		});
	});
});

function emitLanguageChangeEvent(btn) {
    document.dispatchEvent(new CustomEvent('language:change', {
        detail: { lang: btn.dataset.lang }
    }));
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

new CelticMap('map');