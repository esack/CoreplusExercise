import superagentPromisePlugin from 'superagent-promise-plugin';

const request = superagentPromisePlugin.patch(require('superagent'));

const http = (method, url, data) => {
  let rawRequest = request[method](url);
  if (data) {
    rawRequest = rawRequest.send(data);
  }
  return rawRequest;
};

export default http;
