import { api } from "../environments/environments";

import { ResponsePlanets, ResponsePeople, ResponseFilms } from '../models/panel';

export const endpoint = {

    getPeople: function(page:number){
      return api.get<ResponsePeople>('people/?page='+page);
    },
    getPlanets: function(page:number){
      return api.get<ResponsePlanets>('planets/?page='+page);
    },
    getfilms: function(page:number){
      return api.get<ResponseFilms>('films/?page='+page);
    },
  }