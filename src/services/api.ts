import { api } from "../environments/environments";

import { ResponsePlanets, ResponsePeople, ResponseFilms } from '../models/panel';

export const endpoint = {

    getPeople: function(){
      return api.get<ResponsePeople>('people');
    },
    getPlanets: function(){
      return api.get<ResponsePlanets>('planets');
    },
    getfilms: function(){
      return api.get<ResponseFilms>('films');
    },
  }