import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f1c71.firebaseio.com/'
})

export default instance;