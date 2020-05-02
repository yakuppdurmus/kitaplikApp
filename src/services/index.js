import auth from '@react-native-firebase/auth';
const request = require('axios');

import { baseUrl } from './config';

const axios = request.create({
    baseURL: baseUrl,
    timeout: 1000,
});

const errorResponse = { data: null, message: "Bir hata oluştu", status: false };

export const login = async (model) => {

    //model = {email:email,passowrd:passowrd};
    try {
        const response = (await axios.post('/login', model)).data;
        if (response.status) {
            axios.defaults.headers.common.Authorization = response.data.accessToken;
        }
        return response;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}

export const guestLogin = async ({ deviceId }) => {
    try {
        const response = (await axios.post('/guestLogin', { deviceId: deviceId })).data;
        if (response.status) {
            axios.defaults.headers.common.Authorization = response.data.accessToken;
        }
        return response;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }
}
export const register = async (model) => {
    //model = (nameSurnmae, email, passowrd, passwordConfirm)
    try {
        const response = (await axios.post('/register', model)).data;
        if (response.status) {
            console.log(response);

            axios.defaults.headers.common.Authorization = response.data.accessToken;
        }
        return response;


    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}

export const logout = async () => {
    try {
        const response = (await axios.get('/logout')).data;
        if (response.status) {
            delete axios.defaults.headers.common.Authorization;
        }
        return response;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }
}

export const books = async (sort = 1) => {
    //1 & default id desc
    //2 price asc 
    //3 price desc
    //4 isFree true

    try {

        return (await axios.get('/books', { headers: { sort } })).data;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}

export const popular = async () => {
    try {

        return (await axios.get('/popular')).data;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}

export const category = async (pageIndex = 0, pageSize = 20) => {


    try {

        return (await axios.get('/category', { headers: { pageIndex: pageIndex, pageSize: pageSize } })).data;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}
export const bookDetail = async (bookId) => {

    try {
        return (await axios.get('/bookDetail', { headers: { bookid: bookId } })).data;

    } catch (err) {
        console.log(err);
        return errorResponse;
    }

}