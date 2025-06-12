import type { PlacesResponse } from '@_types/api';
import { fetchAPI } from './fetchAPI';
import { BASE_URL } from './common';

// 모든 장소 불러오기
export const fetchAllPlaces = () => {
  return fetchAPI<PlacesResponse>(`${BASE_URL}/places`);
};

// 사용자 장소 불러오기
export const fetchUserPlaces = () => {
  return fetchAPI<PlacesResponse>(`${BASE_URL}/users/places`);
};
