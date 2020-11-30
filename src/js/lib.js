// export function addMarker(lat,lng,map){
//     console.log(lat,lng)
//     L.marker([points.gsx$latitude.$t,points.gsx$longitude.$t]).addTo(map);
// }

export function loadData(options,map){
    fetch(options.googleUrl)
    .then((resp) => resp.json()) // read the data as JSON
    .then(function(data) {
        data.feed.entry.map(points =>{
            L.marker([points.gsx$latitude.$t,points.gsx$longitude.$t]).addTo(map);
        });
    })

}