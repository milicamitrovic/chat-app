import axios from 'axios';
import {
  BASE_URL_ROUTE,
  TOKEN,
  URL_ROUTE,
  // URL_ROUTE_SINCE,
} from '../constants/constants';

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

// export const getMessagesAfterTimestamp = () => {
//   return axios
//     .get(URL_ROUTE_SINCE)
//     .then((response) => response.data)
//     .catch((error) => console.error(error));
// };
