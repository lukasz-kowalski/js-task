import fetch from 'node-fetch';

const createHTTPClient = (apiKey, baseUrl) => ({
  get: (path) => {
    return fetch(`${baseUrl}/${path}&api-key=${apiKey}`).then((res) =>
      res.json(),
    );
  },
});

export default createHTTPClient;
