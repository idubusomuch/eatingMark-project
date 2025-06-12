import useFetch from '@hooks/useFetch';
import { fetchAllPlaces } from '@api/fetchURL';
import PlaceCard from '@components/PlaceCard';
import type { PlacesResponse } from '@_types/api';
import { EmptyResult } from './ErrorComponents';

export default function AllPlaceCards() {
  const { data, loading } = useFetch<PlacesResponse>({
    query: fetchAllPlaces,
  });
  if (loading) return <p>로딩 중...</p>;
  if (!data) return <EmptyResult />;
  return (
    <>
      <div>
        <div className="list-container">
          {data.places.map((el) => (
            <PlaceCard key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  );
}
