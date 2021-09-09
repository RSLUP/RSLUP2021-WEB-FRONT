const DEBUG = true;
let APIConfig;

if (DEBUG) {
    APIConfig = {
        API_BASE_URL: 'https://jsonplaceholder.typicode.com',
    };
} else {
    APIConfig = {
        API_BASE_URL: 'https://prod.sample.com',
    };
}

export default APIConfig;