import {environment} from '../../../environments/environment';

const baseHref = environment.baseUrl;

const Endpoint = {
	USER: {
		CREATE_USER: baseHref + 'user'
	}
};

export default Endpoint;
