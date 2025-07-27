export class Legend extends L.Control {
    constructor(options) {
        super(options);
        this.options = options || {};
        this._map = null;
    }

    onAdd(map) {
        this._map = map;
        const container = L.DomUtil.create('div', 'leaflet-control legend-control collapsed');
        container.innerHTML = `
            <button class="legend-toggle" title="Show/hide legend" type="button">☰ Legend</button>
            <div class="legend-content">
                <ul>
                    <li><i class="icon-medium hgi hgi-stroke hgi-image-02"></i> Place</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-guest-house"></i> Architecture</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-sword-02"></i> Object</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-graduation-scroll"></i> Document</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-calendar-01"></i> Event</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-border-none-02"></i> Immaterial</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-flag-01"></i> Other</li>
                    <li><i class="icon-medium hgi hgi-stroke hgi-help-circle"></i> Unlabeled</li>
                </ul>
            </div>
        `;
        // Prevent map interaction when clicking legend
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.on(container.querySelector('.legend-toggle'), 'click', function () {
            container.classList.toggle('collapsed');
        });
        return container;
    }
}