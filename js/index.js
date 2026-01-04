import { CelticMap } from 'map';

import translations_en from './data/i18n/translatoins_en.js';
import translations_de from './data/i18n/translations_de.js';

const TRANSLATIONS = {
	en: translations_en,
	de: translations_de
};

function setLanguage(lang) {
	const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
	document.getElementById('main-title').textContent = t.mainTitle;
	document.getElementById('service-info').innerHTML = t.serviceInfo;
	document.getElementById('intro-text').textContent = t.introText;
}

document.addEventListener('DOMContentLoaded', () => {
	const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
	setLanguage(browserLang);

	document.querySelectorAll('.lang-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			setLanguage(btn.dataset.lang);
            document.querySelectorAll('.lang-btn').forEach(b => {
                if (b === btn) {
                    b.classList.add('hidden');
                } else {
                    b.classList.remove('hidden');
                }
            });
		});
	});
});

new CelticMap('map');