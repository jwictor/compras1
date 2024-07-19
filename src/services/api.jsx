import axios from 'axios';

const API_URL = 'http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest';

export const fetchUserInfo = async (username) => {
    const response = await axios.get(`${API_URL}/Users/${username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  };