import type { Place } from '@_types/api';
import { BASE_URL } from '@api/common';

type Card = {
  data: Place;
};

export default function PlaceCard({ data }: Card) {
  return (
    <div className="relative w-full aspect-square object-cover pb-2 rounded-lg">
      <h2 className="absolute bottom-2 p-1 m-3 rounded-md bg-white">
        {data.title}
      </h2>
      <img
        src={`${BASE_URL}/${data.image.src}`}
        alt={`${data.image.alt}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
