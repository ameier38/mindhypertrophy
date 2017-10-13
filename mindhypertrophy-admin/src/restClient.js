import { simpleRestClient, fetchUtils } from 'admin-on-rest'
import { API_URL } from './config'

const httpClient = (url, options) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const restClient = simpleRestClient(API_URL, httpClient);

export default restClient