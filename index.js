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
        buildPopupHtml(place).innerHTML,
        commonPopupConfig
    );
});

function buildPopupHtml({
    modernName = '',
    ancientName = '',
    description = '',
    images = [],
    furtherLinks = [],
} = {}) {
    if (!modernName && !ancientName) {
        return document.createElement('div');
    }

    const container = document.createElement('div');

    if (modernName) {
        const modernSpan = document.createElement('span');
        modernSpan.className = 'modernName';
        modernSpan.textContent = modernName;
        container.appendChild(modernSpan);
    }

    if (ancientName) {
        const ancientSpan = document.createElement('span');
        ancientSpan.className = 'ancientName';
        ancientSpan.textContent = ancientName;
        container.appendChild(ancientSpan);
    }

    if (description) {
        const descP = document.createElement('p');
        descP.innerHTML = description;
        container.appendChild(descP);
    }

    if (images && Array.isArray(images) && images.length > 0) {
        images.forEach(image => {
            const imagePart = buildImagePart(image);
            if (imagePart) {
                container.appendChild(imagePart);
            }
        });
    }

    if (furtherLinks.length > 0) {
        const linksP = document.createElement('p');
        furtherLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.textContent = link.text;
            linksP.appendChild(anchor);
        });
        container.appendChild(linksP);
    }

    return container;
}

function buildImagePart(image) {
    if (!image.href) return;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('popup-image-container');

    const anchor = document.createElement('a');
    anchor.href = image.href;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = image.href;
    img.alt = image.altText || "Unfortunately there is no description for this image.";
    img.classList.add('popup-image');
    anchor.appendChild(img);

    if (image.title) {
        img.title = image.title;
    }

    imageContainer.appendChild(anchor);

    if (image.photographyBy || image.license) {
        const credit = document.createElement('small');
        credit.className = 'image-credit';

        if (image.photographyBy) {
            const em = document.createElement('em');
            em.className = 'emphasis-secondary';
            if (image.photographyByLink) {
                const byLink = document.createElement('a');
                byLink.href = image.photographyByLink;
                byLink.target = '_blank';
                byLink.rel = 'noopener noreferrer';
                byLink.textContent = image.photographyBy;
                em.appendChild(byLink);
            } else {
                em.textContent = image.photographyBy;
            }
            credit.appendChild(em);
        }

        if (image.license) {
            if (image.photographyBy) {
                credit.appendChild(document.createTextNode(' | '));
            }
            const licenseSpan = document.createElement('span');
            licenseSpan.className = 'image-license';
            if (image.licenseLink) {
                const licenseLink = document.createElement('a');
                licenseLink.href = image.licenseLink;
                licenseLink.target = '_blank';
                licenseLink.rel = 'noopener noreferrer';
                licenseLink.textContent = image.license;
                licenseSpan.appendChild(licenseLink);
            }
            else {
                licenseSpan.textContent = image.license;
            }
            credit.appendChild(licenseSpan);
        }

        imageContainer.appendChild(credit);
    }

    return imageContainer;
}

// Add all markers to the map
const markerGroup = L.featureGroup(markers).addTo(map);

// Adjust the map view to fit all markers comfortably
map.fitBounds(markerGroup.getBounds());