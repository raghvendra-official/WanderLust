mapboxgl.accessToken = mapToken;

const coordinates = listing.geometry.coordinates;

const map = new mapboxgl.Map({
  container: "map",
  center: coordinates,
  zoom: 9,
});

console.log(coordinates);

 new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h4>${listing.location}</h4><p>Exact location provided after booking</p>`,
      )
      .setMaxWidth("300px"),
  )
  .addTo(map);
