import axios from 'axios';
import { useEffect, useState } from 'react';

const LocationComponent = () => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);

      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              });
              fetchLocation();
            },
            (error) => {
              setError(error.message);
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      };

    const [locationName, setLocationName] = useState('');
    const fetchLocation = async () => {
        try {
            const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
                params: {
                    lat: location.lat,
                    lon: location.lon,
                    format: 'json',
                    addressdetails: 1
                },
            });

            const result = response.data;
            if (result && result.address) {
                setLocationName(result.display_name);
                console.log(result.display_name);
            } else {
                setLocationName('Location not found');
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };
    // useEffect(() => {

    //     fetchLocation();
    // }, []);

    return (
        <div>
            <button
                onClick={getLocation}
            >Get Current Location</button>
            {location.lat && location.lon ? (
                <div>
                    <h3>Your Current Location:</h3>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                </div>
            ) : (
                <p>{error}</p>
            )}
        </div>
    );
};

export default LocationComponent;
