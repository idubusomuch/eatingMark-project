import useFetch from '@hooks/useFetch';
import { fetchAllPlaces } from '@api/fetchURL';
import PlaceCard from '@components/PlaceCard';
import type { PlacesResponse } from '@_types/api';
import { EmptyResult, LocationError } from './ErrorComponents';
import useCurrentPosition from '@hooks/useCurrentPosition';
import { sortPlacesByDistance } from '@utils/loc';
import { useMemo } from 'react';

export default function AllPlaceCards() {
  const { coords, error: locError } = useCurrentPosition();
  const { data, loading } = useFetch<PlacesResponse>({
    query: fetchAllPlaces,
  });

  const sortedPlaces = useMemo(() => {
    if (!data || !coords) return [];
    return sortPlacesByDistance(data.places, coords.lat, coords.lon);
  }, [data, coords]);

  console.log(coords);

  if (loading || !coords)
    return (
      <p className="text-center text-gray-300 py-10">
        맛집을 불러오는 중입니다...
      </p>
    );
  if (!data) return <EmptyResult />;
  if (locError) return <LocationError />;

  return (
    <>
      <div>
        <h2 className="px-4 text-xl text-gray-300 mx-auto max-w-[1000px]">
          맛집 목록
        </h2>
        <div className="list-container">
          {sortedPlaces.map((el) => (
            <PlaceCard key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  );
}
