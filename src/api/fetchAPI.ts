import { options } from './common';

export async function fetchAPI<T>(url: string): Promise<T> {
  const response = await fetch(url, options);
  console.log(response);
  if (!response.ok) {
    throw new Error('API 요청 실패: ' + response.statusText);
  }
  return response.json();
}
