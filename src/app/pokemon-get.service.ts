import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonGetService {

  constructor(
    private http : HttpClient,
  ) { }

  traerTodos(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'); //?limit=1055
  }
  traerPokemon(url){
    return this.http.get(url);
  }
  traerSiguiente(url){
    return this.http.get(url);
  }
  traerPrevio(url){
    return this.http.get(url);
  }
  traerHabilidad(url){
    return this.http.get(url);
  }
}
