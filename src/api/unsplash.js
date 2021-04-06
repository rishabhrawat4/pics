import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XUpCBXlDXCORW1cCgCs1c0TQswDEz3ejPeFcE9y46cA'
    }
});