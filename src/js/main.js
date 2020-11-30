import * as leafletScrollLib from './lib.js';


const options = {
    maxZoom: 0,
    minZoom: 12,
    googleUrl: 'https://spreadsheets.google.com/feeds/list/1BPD2m7decBD0gdN02fBaMKkj5x7HtQfueTaXI7Sj-Q0/on2nzw1/public/values?alt=json',
    center: [33.79487002, -118.23543]

}

document.body.onload = function () {
    let center = options.center
    let layer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        opacity: 1,
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    });

    let map = L.map('map', {
        layers: [ layer ],
        center: L.latLng(center[0], center[1]), zoom: 7
    });
    let Stamen_TonerLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        opacity: .2,

        ext: 'png'
      });        
      map.addLayer(Stamen_TonerLabels);

    //   leafletScrollLib.addMarker(33.79487002, -118.23543,map)

      leafletScrollLib.loadData(options,map)
      
};
