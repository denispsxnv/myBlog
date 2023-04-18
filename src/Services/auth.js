import axios from "axios";

const registerURL = "https://gentle-ridge-36337.herokuapp.com/api/auth/register"

export const authServices = () => {
    const registration = (userData) => {
        return axios.post(`${registerURL}`, userData)
    }   

    return {
        registration,
    }
}