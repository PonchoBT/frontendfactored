import { api } from "../environments/environments";

import { RespuestaPeople, RespuestaPlanetsl, RespuestaFilms, RespuestaSpecies, RespuestaVehicles, RespuestaStarships} from '../models/panel';

export const endpoint = {

    getPeople: function(){
      return api.get<RespuestaPeople>('people');
    },
    getPlanets: function(){
      return api.get<RespuestaPlanetsl>('planets');
    },
    getfilms: function(){
      return api.get<RespuestaFilms>('films');
    },
   getSpecies: function(){
      return api.get<RespuestaSpecies>('species');
    },
    getVehicles: function(){
      return api.get<RespuestaVehicles>('vehicles');
    },
    getstarships: function(){
      return api.get<RespuestaStarships>('starships');
    }
  }