import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = ({ data }) => {
  console.log(data);
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 4.570868,
    lng: -74.297333,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAZ1SPK85dMJihSVfzaEZR54PAOnGXTtS8">
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={15}
        center={
          data ? { lat: data.latitude, lng: data.longitude } : defaultCenter
        }
      >
        {data && (
          <Marker position={{ lat: data.latitude, lng: data.longitude }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
