import { 
    getPlaces,
    TYPE_ARCHITECTURE,
    TYPE_DOCUMENT,
    TYPE_EVENT,
    TYPE_OBJECT,
    TYPE_PLACE,
    TYPE_IMMATERIAL,
    TYPE_OTHER
} from 'places';
import { getRivers } from 'rivers';
import { Legend } from 'legend';

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

const labelMarkers = getPlaces().map((place) => {
    const marker = L.marker(place.coordinates, {
        icon: L.divIcon({
            className: 'marker-short-info',
            html: buildShortInfo(place).innerHTML,
            iconSize: null,
            iconAnchor: [-25, 45],
        }),
        interactive: false,
    });
    marker._allTypes = place.types || [];
    return marker;
});

// Add/remove labels based on zoom and filter
const LABEL_ZOOM = 11; // show labels at this zoom or higher
let currentActiveTypes = null; // cache for filter state

function updateLabelMarkersVisibility() {
    const showLabels = map.getZoom() >= LABEL_ZOOM;
    labelMarkers.forEach(label => {
        let show = showLabels;
        if (show && currentActiveTypes) {
            const markerHasTypes = label._allTypes && label._allTypes.length > 0;
            if (markerHasTypes) {
                show = label._allTypes.some(t => currentActiveTypes.includes(t));
            } else {
                show = currentActiveTypes.includes('unlabeled');
            }
        }
        if (show) {
            label.addTo(map);
        } else {
            map.removeLayer(label);
        }
    });
}

map.on('zoomend', updateLabelMarkersVisibility);

// Optionally, show labels if already zoomed in on load
updateLabelMarkersVisibility();

// Add markers

// --- Marker creation with type info ---
const places = getPlaces();

const markers = places.map((place) => {
    const marker = L.marker(place.coordinates).bindPopup(
        buildPopupHtml(place).innerHTML,
        commonPopupConfig
    );
    marker._allTypes = place.types || [];
    return marker;
});

function buildShortInfo(place) {
    const container = document.createElement('div');
    const titleSpan = document.createElement('span');
    titleSpan.className = 'marker-title';

    if (place.modernName) {
        const modernSpan = document.createElement('span');
        modernSpan.className = 'marker-title_modern-name';
        modernSpan.textContent = place.modernName;
        titleSpan.appendChild(modernSpan);
    }

    if (place.modernName && place.ancientName) {
        titleSpan.appendChild(document.createTextNode(' | '));
    }

    if (place.ancientName) {
        const ancientSpan = document.createElement('span');
        ancientSpan.className = 'marker-title_ancient-name';
        ancientSpan.textContent = place.ancientName;
        titleSpan.appendChild(ancientSpan);
    }

    container.appendChild(titleSpan);

    if (place.shortInfo) {
        const shortInfoSpan = document.createElement('span');
        shortInfoSpan.textContent = place.shortInfo;
        container.appendChild(shortInfoSpan);
    }

    let icons = buildTypeIcons(place.types);

    if (icons.length > 0) {
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'type-icons';
        icons.forEach(icon => {
            iconsContainer.appendChild(icon);
        });
        container.appendChild(iconsContainer);
    }

    return container;
}

function buildTypeIcons(types) {
    const icons = [];
    
    if (types) {
        types.forEach(type => {
            const icon = document.createElement('i');
            icon.className = `icon-medium hgi hgi-stroke`;
            switch (type) {
                case TYPE_PLACE:
                    icon.classList.add('hgi-image-02');
                    break;
                case TYPE_ARCHITECTURE:
                    icon.classList.add('hgi-guest-house');
                    break;
                case TYPE_OBJECT:
                    icon.classList.add('hgi-sword-02');
                    break;
                case TYPE_DOCUMENT:
                    icon.classList.add('hgi-graduation-scroll');
                    break;
                case TYPE_EVENT:
                    icon.classList.add('hgi-calendar-01');
                    break;
                case TYPE_IMMATERIAL:
                    icon.classList.add('hgi-border-none-02');
                    break;
                case TYPE_OTHER:
                    icon.classList.add('hgi-flag-01');
                    break;
            }
            icons.push(icon);
        });
    }

    if (icons.length === 0) {
        const defaultIcon = document.createElement('i');
        defaultIcon.className = `icon-medium hgi hgi-stroke hgi-help-circle`;
        icons.push(defaultIcon);
    }

    return icons;
};

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
        modernSpan.className = 'popup-title_modern-name';
        modernSpan.textContent = modernName;
        container.appendChild(modernSpan);
    }

    if (modernName && ancientName) {
        container.appendChild(document.createTextNode(' | '));
    }

    if (ancientName) {
        const ancientSpan = document.createElement('span');
        ancientSpan.className = 'popup-title_ancient-name';
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
    imageContainer.appendChild(anchor);

    if (image.title) {
        img.title = image.title;
        const caption = document.createElement('span');
        caption.className = 'image-caption';
        caption.textContent = image.title;
        imageContainer.appendChild(caption);
    }

    if (image.imageBy || image.license) {
        const credit = document.createElement('small');
        credit.className = 'image-credit';

        if (image.imageBy) {
            const em = document.createElement('em');
            em.className = 'image-by';
            if (image.imageByLink) {
                const byLink = document.createElement('a');
                byLink.href = image.imageByLink;
                byLink.target = '_blank';
                byLink.rel = 'noopener noreferrer';
                byLink.textContent = image.imageBy;
                em.appendChild(byLink);
            } else {
                em.textContent = image.imageBy;
            }
            credit.appendChild(em);
        }

        if (image.license) {
            if (image.imageBy) {
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
/*
const riverData = getRivers();
const features = [];
riverData.forEach(river => {
    const name = river.name || 'Unnamed River';
    river.features.forEach(feature => {
        const coordinates = feature.slice(12, -1).split(',').map(coord => {
            const [lon, lat] = coord.trim().split(' ').map(Number);
            return [lon, lat];
        });

        features.push({
            type: 'Feature',
            properties: { name },
            geometry: {
                type: 'LineString',
                coordinates,
            }
        });
    });
});

const riverGeoJson = {
    "type": "FeatureCollection",
    "features": features,
};

// Add the river GeoJSON to the map with custom style
const riverLayer = L.geoJSON(riverGeoJson, {
    style: {
        color: '#0062ff',
        weight: 4,
        opacity: 1,
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(feature.properties.name);
        }
    }
}).addTo(map);
*/
// Adjust the map view to fit all markers comfortably

map.fitBounds(markerGroup.getBounds());
const legendControl = new Legend({ position: 'topright' });
map.addControl(legendControl);

// --- Filtering logic ---
const legendContainer = document.querySelector('.legendControl');
if (legendContainer) {
    legendContainer.addEventListener('filter:update', (e) => {
        const activeTypes = e.detail.activeTypes;
        currentActiveTypes = activeTypes;
        markers.forEach((marker, i) => {
            let showMarker = false;
            const markerHasTypes = marker._allTypes && marker._allTypes.length > 0;

            if(markerHasTypes) {
                showMarker = marker._allTypes.some(t => activeTypes.includes(t));
            } else {
                showMarker = activeTypes.includes('unlabeled');
            }

            if (showMarker) {
                markerGroup.addLayer(marker);
            } else {
                markerGroup.removeLayer(marker);
            }
        });
        updateLabelMarkersVisibility();
    });
}