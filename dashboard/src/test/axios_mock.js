let axios = require('axios');
let MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
export default new MockAdapter(axios);