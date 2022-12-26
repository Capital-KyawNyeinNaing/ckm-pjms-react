import httpClient from './HttpClient';

export const controller = async (endpoint, ...data) => {
  const api = endpoint.split(':');
  const client = httpClient[api[0]](api[1], ...data);
  return await client.then((res) => res && res).catch((error) => error);
};
