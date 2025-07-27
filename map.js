// map.js
// Handles map initialization and base layers
export function createMap(targetId) {
    const map = L.map(targetId);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    return map;
}

export const commonPopupConfig = {
    maxWidth: 600,
    className: 'popup'
};
