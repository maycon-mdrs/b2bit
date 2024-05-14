import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/auth/',
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    },
});
