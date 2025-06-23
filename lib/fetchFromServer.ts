const BASE_URL = process.env.SERVER_URL || 'http://localhost:3001';

export async function fetchFromServer(path: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, options);
    if (!res.ok) return {};
    return await res.json();
  } catch (err) {
    console.error('Network request failed', err);
    return {};
  }
}

export default fetchFromServer;
