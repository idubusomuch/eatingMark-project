import { useEffect, useState } from 'react';

type Coords = { lat: number; lon: number };

export default function useCurrentPosition() {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
      },
      (err) => {
        setError(err.message);
      },
    );
  }, []);

  return { coords, error };
}
