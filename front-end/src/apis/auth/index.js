import axios from 'axios';
import { apiURL } from '../../utils/constants/URLs';

export const loginApi = async ({ email, password }) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
    if (error.response) {
      return error.response;
    }
    throw error;
  }
};

export const signupApi = async ({ email, password, fullName }) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/signup`, {
      email,
      password,
      name: fullName,
    });
    return response;
  } catch (error) {
    console.log(error);
    if (error.response) {
      return error.response;
    }
  }
};
