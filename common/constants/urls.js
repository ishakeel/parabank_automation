/* eslint-disable no-undef */
const urls = {
  odin: `${Cypress.env('ODIN_URL')}/api/ArrivalService/createArrival`,
  profileAccessToken: `${Cypress.env('ODIN_URL')}/api/rpc/ProfileAccessTokenService/accessWithPasswordAuthentication`,
  login: `${Cypress.env('API_URL')}/v1/auth/login`,
};

export {
  urls,
};

export default urls;
