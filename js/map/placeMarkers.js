import { buildShortInfo, buildPopupHtml } from 'popupBuilders';
import 'leaflet';

const commonPopupConfig = {
    maxWidth: 600,
    className: 'popup'
};

export function createPlaceMarkers(places) {
    return places.map((place) => {
        const marker = L.marker(place.coordinates).bindPopup(
            buildPopupHtml(place).innerHTML,
            commonPopupConfig
        );
        marker._allTypes = place.types || [];
        return marker;
    });
}

export function createPlaceLabelMarkers(places) {
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


