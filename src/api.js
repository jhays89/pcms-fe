import axios from 'axios';

const apiBaseUrl = process.env.API_BASE_URL;

export const api = {
	AJAX: function(config) {
		config.url = apiBaseUrl + config.url;
		return axios(config);
	},

	GET: function(url) {
		return axios
			.get(apiBaseUrl + url);
	},

	PUT: function(url, request) {
		return axios
			.put(apiBaseUrl + url, request);
	},

	POST: function(url, request) {
		return axios
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

		return axios({
			method: 'patch',
			url: apiBaseUrl + url,
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
			data: JSON.stringify(request)
		});
    },
	
	DELETE: function(url, request) {  
    if (request) {
      return axios({
        method: 'delete',
        url: apiBaseUrl + url,
        data: request
      });
    }
    else {
    return axios
      .delete(apiBaseUrl + url);
    }
	}
};
