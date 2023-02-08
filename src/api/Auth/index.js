import axios from 'axios';

// Login User
export const loginUser = (values) => {
    const url = 'http://192.168.18.15:8000/auth/login';

    return axios.post(url, values)
        .then(response => response.data);
}


// Register User
export const registerUser = (values) => {
    const url = 'http://192.168.18.15:8000/auth/register';

    return axios.post(url, values)
        .then(response => response.data);
}
