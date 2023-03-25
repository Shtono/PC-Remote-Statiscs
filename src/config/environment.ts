export const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const PROTOCOL = process.env.REACT_APP_PROTOCOL;

export const API_BASE_URL = `${PROTOCOL}://${SERVER_URL}:${SERVER_PORT}`;
