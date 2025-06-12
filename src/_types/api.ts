export type Place = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
};

export type PlacesResponse = {
  places: Place[];
};
