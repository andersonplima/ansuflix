import { post, get } from './base';

export async function getAll() {
  const url = '/videos';
  return get(url);
}

export async function create(video) {
  const url = '/videos';
  return post(url, video);
}
