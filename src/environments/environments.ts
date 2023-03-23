import axios from "axios";

const environment = {
    production: false,
    baseUrl:'https://swapi.dev/api',
  };


  export const api = axios.create({
    baseURL: environment.baseUrl
  })