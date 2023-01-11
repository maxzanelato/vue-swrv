import axios from 'axios';

export default async function fetcher(id) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
}
