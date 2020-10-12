const mymap = L.map('mapid').setView([0, 0], 3.5);
const marker = L.marker([0, 0]).addTo(mymap);
const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap)

async function getISS() {
    const response = await fetch(api_url)
    const data = await response.json();
    console.log(data)
    const { latitude, longitude, velocity } = data
    console.log(velocity)

    marker.setLatLng([latitude, longitude])
    mymap.setView([latitude, longitude])

    const lat = document.getElementById("lat")
    const long = document.getElementById("long")
    const vel = document.getElementById("vel")
    lat.innerHTML = `Latitude: ${latitude.toFixed(2)}°`
    long.innerHTML = `Longitude: ${longitude.toFixed(2)}`
    vel.innerHTML = `Velocity: ${Math.floor(velocity)} km/h`
}

getISS();

setInterval(getISS, 1000);

