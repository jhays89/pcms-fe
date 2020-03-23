import axios from 'axios';

const apiBaseUrl = process.env.API_BASE_URL;
const requestInterceptor = (request) => { 
  request.withCredentials = true;
  return request;
};

const instance = axios.create();
instance.interceptors.request.use(request => requestInterceptor(request));

export const api = {
	GET: function(url) {
    return instance
			.get(apiBaseUrl + url);
	},

	PUT: function(url, request) {
    return instance
			.put(apiBaseUrl + url, request);
	},

	POST: function(url, request) {
    return instance
			.post(apiBaseUrl + url, request);
	},

	PATCH: function(url, changes) {
		var request = [];

		for (var i = 0; i < changes.length; i++) {
			request.push({
				op: 'replace',
				path: '/' + changes[i].name,
				value: changes[i].value
			});
		}

		const patchInstance = axios.create({
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
    });
    
    patchInstance.interceptors.request.use(request => requestInterceptor(request));

    return patchInstance.patch(apiBaseUrl + url, JSON.stringify(request));
  },
	
	DELETE: function(url, request) {  
    return instance
      .delete(apiBaseUrl + url, request);
	}
};
