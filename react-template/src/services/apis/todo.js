import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export async function getTodos() {
  const response = await axios.get(`${BASE_URL}/todos`);

  return response.data;
}

export async function createItem(item) {
  const response = await axios.post(`${BASE_URL}/todos`, item);

  return response.data;
}

export async function removeItem(itemId) {
  const response = await axios.delete(`${BASE_URL}/todos/${itemId}`);

  return response.data;
}

export async function updateItem(item) {
  const response = await axios.patch(`${BASE_URL}/todos/${item.id}`, item);

  return response.data;
}
