import fetch from 'node-fetch';

const createHTTPClient = (apiKey, baseUrl) => ({
  get: path => fetch(`${baseUrl}/${path}&api-key=${apiKey}`).then(res => res.json()),
});

export default createHTTPClient;
