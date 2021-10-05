const DEBUG = true;
let APIConfig;

if (DEBUG) {
    APIConfig = {
        API_BASE_URL: 'http://localhost:5001/api/v1'
    };
} else {
    APIConfig = {
        API_BASE_URL: 'https://prod.sample.com',
    };
}

export default APIConfig;