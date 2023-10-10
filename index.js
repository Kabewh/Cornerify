let map;

async function initMap() {
  const apiKey = 'AIzaSyC-Z9VAiVpCkpFr7vax6DNV5k-JK-5v-DY'
  const { Map } = await google.maps.importLibrary("maps");

  var mapOptions = {
    center: { lat: 44.37772399204723, lng: 26.130705206702356 },
    zoom: 19,
  };
  map = new Map(document.getElementById("map"), mapOptions);

  const apiUrl = `https://roads.googleapis.com/v1/nearestRoads?points=44.37772399204723%2C26.130705206702356%7C44.37772399204723%2C26.130705206702356%7C44.37772399204723%2C26.130705206702356&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

initMap();



