import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GymFinderTool = () => {
  const [zipCode, setZipCode] = useState('');
  const [center, setCenter] = useState(null);
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    if (zipCode) {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&postalcode=${zipCode}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            setCenter([parseFloat(lat), parseFloat(lon)]);
            fetchGyms(lat, lon);
          }
        })
        .catch((error) => console.error('Error fetching geocode:', error))
        .finally(() => setLoading(false));
    }
  };

  const fetchGyms = (lat, lon) => {
    // Dummy data for demonstration, replace with actual API call to fetch gym data
    const dummyGyms = [
      {
        id: 1,
        name: 'Gym A',
        lat: parseFloat(lat) + 0.01,
        lon: parseFloat(lon) + 0.01,
        phone: '123-456-7890',
      },
      {
        id: 2,
        name: 'Gym B',
        lat: parseFloat(lat) + 0.02,
        lon: parseFloat(lon) - 0.02,
        phone: '234-567-8901',
      },
      {
        id: 3,
        name: 'Gym C',
        lat: parseFloat(lat) - 0.01,
        lon: parseFloat(lon) + 0.01,
        phone: '345-678-9012',
      },
    ];
    setGyms(dummyGyms);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setZipCode(value);
  };

  return (
    <div>
      <input
        type="text"
        className="zipInput"
        placeholder="Enter Zip Code"
        value={zipCode}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch} className="btn searchBtn">
        Search
      </button>
      {loading && <p>Loading...</p>}
      {!loading && center && (
        <div
          className="map-container"
          style={{ height: '350px', width: '100%' }}
        >
          <MapContainer
            center={center}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {gyms.map((gym) => (
              <Marker
                key={gym.id}
                position={[parseFloat(gym.lat), parseFloat(gym.lon)]}
              >
                <Popup>
                  <div>
                    <h3>{gym.name}</h3>
                    <p>Phone: {gym.phone}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default GymFinderTool;
