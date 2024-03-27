import React, { useState } from 'react';

const GymFinderTool = () => {
  const [zipCode, setZipCode] = useState('');
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/gyms?zipCode=${zipCode}`
      );
      const data = await response.json();
      console.log('Gym data:', data); // Log the received data
      setGyms(data.results);
    } catch (error) {
      console.error('Error fetching gyms:', error);
    } finally {
      setLoading(false);
    }
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
      {!loading && (
        <div>
          <h2>Gyms Near You</h2>
          <ul>
            {gyms.map((gym) => (
              <li key={gym.place_id}>
                {gym.name} - Phone: {gym.formatted_phone_number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GymFinderTool;
