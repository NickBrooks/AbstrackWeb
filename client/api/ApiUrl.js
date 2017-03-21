export default function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if(apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}