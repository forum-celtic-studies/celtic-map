import { getPlaces } from 'places';
import { Legend } from 'legend';
import { createMap } from './map/map.js';
import { createPlaceMarkers, createPlaceLabelMarkers } from './map/placeMarkers.js';
import 'leaflet';

const map = createMap('map');

const places = getPlaces();
const labelMarkers = createPlaceLabelMarkers(places);

// show labels at this zoom or higher
const LABEL_ZOOM = 11; 
// cache for filter state
let currentActiveTypes = null; 

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
updateLabelMarkersVisibility();

const markers = createPlaceMarkers(places);

const markerGroup = L.featureGroup(markers).addTo(map);

map.fitBounds(markerGroup.getBounds());
const legendControl = new Legend({ position: 'topright' });
map.addControl(legendControl);

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