import { get, post } from './base';

export async function getAll() {
  const url = '/categorias';
  return get(url);
}

export async function getAllWithVideos() {
  const url = '/categorias?_embed=videos';
  return get(url);
}

export async function create(categoria) {
  const url = '/categorias';
  return post(url, categoria);
}
