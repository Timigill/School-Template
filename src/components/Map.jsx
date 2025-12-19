'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const center = {
    lat: 32.1877, // Oxford House System coordinates (example)
    lng: 74.1945
  };

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;