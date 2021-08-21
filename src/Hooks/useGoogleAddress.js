import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});

  const API = `http://api.positionstack.com/v1/forward?access_key=4a5b8aea6ae77b28351e77b2e3a6a403&query=${address}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.data[0]);
  }, []);

  return map;
};

export default useGoogleAddress;
