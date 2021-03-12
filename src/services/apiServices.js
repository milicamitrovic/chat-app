import axios from 'axios';
const TOKEN = 'FGvviHC9KSai';
const BASE_URL_ROUTE =
  'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
const URL_ROUTE = `${BASE_URL_ROUTE}/?token=${TOKEN}`;

export const getMessages = () => {
  return axios
    .get(URL_ROUTE)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const postMessage = (content, callback) => {
  return axios
    .post(BASE_URL_ROUTE, content, {
      headers: { 'Content-Type': 'application/json', token: TOKEN },
    })
    .then((response) => response.data)
    .then(() => callback())
    .catch((error) => console.error(error));
};
