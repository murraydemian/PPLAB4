import { Component, OnInit } from '@angular/core';
import { PokemonGetService } from '../pokemon-get.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  pokemons;
  prev;
  next;
  ready : boolean = false;

  constructor(
    private pokeGet : PokemonGetService,
  ) { }

  ngOnInit(): void {
    this.pokeGet.traerTodos().subscribe((data : any) => {
      this.pokemons = data.results;
      this.prev = data.previous;
      this.next = data.next;
      this.ready = true;
      //console.log(this.pokemons)
    });
  }
  onPageChange(event){
    this.ready = false;
    if(event.previousPageIndex < event.pageIndex){
      this.pokeGet.traerSiguiente(this.next).subscribe((data : any)=>{
        //console.log(data);
        this.pokemons = data.results;
        this.prev = data.previous;
        this.next = data.next;
        this.ready = true;
      });
    }else{
      this.pokeGet.traerPrevio(this.prev).subscribe((data : any)=>{
        this.pokemons = data.results;
        this.prev = data.previous;
        this.next = data.next;
        this.ready = true;
      });
    }
  }

}
