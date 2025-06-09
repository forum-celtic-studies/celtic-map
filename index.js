import { getPlaces } from 'places';

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
const markers = getPlaces().map((place) => {
    return L.marker(place.coordinates).bindPopup(
        buildPopupHtml(place),
        commonPopupConfig
    );
});

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