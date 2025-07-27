export class Legend extends L.Control {
    constructor(options) {
        super(options);
        this.options = options || {};
        this._map = null;
    }

    onAdd(map) {
        this._map = map;
        const container = L.DomUtil.create('div', 'leaflet-control legendControl collapsed');
        container.innerHTML = `
            <button class="legendToggle" title="show/hide legend and filters" type="button">☰ Legend and Filters</button>
            <div class="legendContent">
                <fieldset>
                    <legend>Legend and Filters</legend>
                    <div class="legend-items">
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-place" name="legend-type" value="place" checked>
                            <label for="legend-place" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-image-02"></i> Place</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-architecture" name="legend-type" value="architecture" checked>
                            <label for="legend-architecture" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-guest-house"></i> Architecture</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-object" name="legend-type" value="object" checked>
                            <label for="legend-object" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-sword-02"></i> Object</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-document" name="legend-type" value="document" checked>
                            <label for="legend-document" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-graduation-scroll"></i> Document</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-event" name="legend-type" value="event" checked>
                            <label for="legend-event" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-calendar-01"></i> Event</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-immaterial" name="legend-type" value="immaterial" checked>
                            <label for="legend-immaterial" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-border-none-02"></i> Immaterial</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-other" name="legend-type" value="other" checked>
                            <label for="legend-other" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-flag-01"></i> Other</label>
                        </span>
                        <span class="legendLine">
                            <input type="checkbox" class="legendFilter" id="legend-unlabeled" name="legend-type" value="unlabeled" checked>
                            <label for="legend-unlabeled" class="legendItem_label"><i class="icon-medium hgi hgi-stroke hgi-help-circle"></i> Unlabeled</label>
                        </span>
                    </div>
                </fieldset>
                <button type="button" class="legendEnableAllButton" title="Reset filters/show all">Reset filters</button>
            </div>
        `;
        // Prevent map interaction when clicking legend
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.on(container.querySelector('.legendToggle'), 'click', function () {
            container.classList.toggle('collapsed');
        });

        // Filtering: dispatch custom event on change
        const checkboxes = container.querySelectorAll('.legendFilter');
        function dispatchFilterUpdate() {
            const activeTypes = Array.from(checkboxes)
                .filter(box => box.checked)
                .map(box => box.value);
            container.dispatchEvent(new CustomEvent('filter:update', {
                detail: { activeTypes },
                bubbles: true
            }));
        }
        checkboxes.forEach(cb => {
            cb.addEventListener('change', dispatchFilterUpdate);
        });

        const enableAllBtn = container.querySelector('.legendEnableAllButton');
        if (enableAllBtn) {
            enableAllBtn.addEventListener('click', () => {
                checkboxes.forEach(cb => { cb.checked = true; });
                dispatchFilterUpdate();
            });
        }
        return container;
    }
}