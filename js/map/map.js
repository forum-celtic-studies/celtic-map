import { createPlaceMarkers, createPlaceLabelMarkers } from 'placeMarkers';
import { getPlaces } from 'places';
import { Legend } from 'legend';
import 'leaflet';

export class CelticMap {
    constructor(targetId) {
        this.LABEL_ZOOM = 11;
        this.currentActiveTypes = null;
        this.map = this.setupMap(targetId);
        this.places = getPlaces();
        this.labelMarkers = createPlaceLabelMarkers(this.places);
        this.markers = createPlaceMarkers(this.places);
        this.markerGroup = L.featureGroup(this.markers).addTo(this.map);

        this.setupLegend();
        this.setupFiltering();
        this.setupPlaceLabelMarkers();
        this.map.fitBounds(this.markerGroup.getBounds());
    }

    setupMap(targetId) {
        const map = L.map(targetId);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        return map;
    }


    setupPlaceLabelMarkers() {
        this.map.on('zoomend', () => this.updateLabelMarkersVisibility());
        this.updateLabelMarkersVisibility();
    }

    setupLegend() {
        const legendControl = new Legend({ position: 'topright' });
        this.map.addControl(legendControl);
    }

    setupFiltering() {
        const legendContainer = document.querySelector('.legendControl');
        if (legendContainer) {
            legendContainer.addEventListener('filter:update', (e) => {
                const activeTypes = e.detail.activeTypes;
                this.currentActiveTypes = activeTypes;
                this.updatePlaceMarkersVisibility();
                this.updateLabelMarkersVisibility();
            });
        }
    }

    updateLabelMarkersVisibility() {
        const showLabels = this.map.getZoom() >= this.LABEL_ZOOM;
        this.labelMarkers.forEach(label => {
            let show = showLabels;
            if (show && this.currentActiveTypes) {
                const markerHasTypes = label._allTypes && label._allTypes.length > 0;
                if (markerHasTypes) {
                    show = label._allTypes.some(t => this.currentActiveTypes.includes(t));
                } else {
                    show = this.currentActiveTypes.includes('unlabeled');
                }
            }
            if (show) {
                this.map.addLayer(label);
            } else {
                this.map.removeLayer(label);
            }
        });
    }

    updatePlaceMarkersVisibility() {
        this.markers.forEach((marker) => {
            let showMarker = false;
            const markerHasTypes = marker._allTypes && marker._allTypes.length > 0;

            if (markerHasTypes) {
                showMarker = marker._allTypes.some(t => this.currentActiveTypes.includes(t));
            } else {
                showMarker = this.currentActiveTypes.includes('unlabeled');
            }

            if (showMarker) {
                this.markerGroup.addLayer(marker);
            } else {
                this.markerGroup.removeLayer(marker);
            }
        });
    }
}