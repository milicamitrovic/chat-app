export const AUTHOR_NAME = 'm';
export const TIMESTAMP_FORMAT = 'D MMM YYYY H:mm';
export const TOKEN = 'FGvviHC9KSai';
export const CURRENT_TIMESTAMP = Date.now();

export const BASE_URL_ROUTE =
  'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
export const URL_ROUTE = `${BASE_URL_ROUTE}/?token=${TOKEN}`;
export const URL_ROUTE_SINCE = `${BASE_URL_ROUTE}?since=${CURRENT_TIMESTAMP}&limit=10&token=${TOKEN}`;
