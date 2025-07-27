import { getPlaces } from 'places';
import { getRivers } from 'rivers';
import { Legend } from 'legend';
import { createMap } from './map/map.js';
import { createMarkers, createLabelMarkers } from './map/markers.js';
import 'leaflet';

// Initialize the map
const map = createMap('map');

const places = getPlaces();
const labelMarkers = createLabelMarkers(places);

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
updateLabelMarkersVisibility();

// Add markers
const markers = createMarkers(places);


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