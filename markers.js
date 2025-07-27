// markers.js
// Handles marker and label creation, filtering, and group management
import { buildShortInfo, buildPopupHtml } from './popupBuilders.js';
import { commonPopupConfig } from './map.js';

export function createMarkers(places) {
    return places.map((place) => {
        const marker = L.marker(place.coordinates).bindPopup(
            buildPopupHtml(place).innerHTML,
            commonPopupConfig
        );
        marker._allTypes = place.types || [];
        return marker;
    });
}

export function createLabelMarkers(places) {
    return places.map((place) => {
        const marker = L.marker(place.coordinates, {
            icon: L.divIcon({
                className: 'markerShortInfo',
                html: buildShortInfo(place).innerHTML,
                iconSize: null,
                iconAnchor: [-25, 45],
            }),
            interactive: false,
        });
        marker._allTypes = place.types || [];
        return marker;
    });
}
