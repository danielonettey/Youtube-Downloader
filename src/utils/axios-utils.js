import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" })

// General request 
export const requestOffline = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`
    client.defaults.method = 'GET'
    const onSuccess = (response) => response;
    const onError = (error) => {
        // optionally catch errors and add additional logging here
        return error;
    }

    return client(options).then(onSuccess).catch(onError)
}


export const request = ({ ...options }) => {
    const client = axios.create({ baseURL: "https://youtube.googleapis.com/youtube/v3" })

    client.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem('token')}`
    client.defaults.method = 'GET'
    const onSuccess = (response) => response;
    const onError = (error) => {
        // optionally catch errors and add additional logging here
        return error;
    }

    return client(options).then(onSuccess).catch(onError)
}