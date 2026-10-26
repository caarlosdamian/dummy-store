import { create } from 'axios';

console.log('import.meta.env?.BASE_URL',import.meta.env)

export const api = create({
  baseURL: import.meta.env?.VITE_URL || 'https://dummyjson.com',
  timeout: 5000,
});



