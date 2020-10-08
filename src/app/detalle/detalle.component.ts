import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonGetService } from '../pokemon-get.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  nombrePokemon: string = "";
  pokemon: any = {};
  habilidades : Array<any> = [];
  pkReady : boolean = false;
  abReady : boolean = false;

  constructor(private route: ActivatedRoute, private datos: PokemonGetService) { }

  ngOnInit(): void {
    this.nombrePokemon = this.route.snapshot.paramMap.get("pokemon");
    //console.log(this.nombrePokemon);
    this.datos.traerPokemon("https://pokeapi.co/api/v2/pokemon/" + this.nombrePokemon)
    .subscribe((pokemon : any) => {
      this.pokemon = pokemon;
      //console.log(pokemon);
      this.pkReady = true;
      this.pokemon.abilities.forEach((ab : any) => {
        //console.log(ab);
        this.datos.traerHabilidad(ab.ability.url).subscribe((abDetalle : any) => {

          this.habilidades.push(abDetalle);
          //console.log(abDetalle);
          if(this.habilidades.length == (<Array<any>>this.pokemon.abilities).length){
            pokemon.abilities = this.habilidades;
            //console.log();
            this.abReady = true;
          }
        });
      });
      //console.log((<Array<any>>this.pokemon.abilities).length);

    });
  }
}
/**
 * 3. En la ruta detalle se debe mostrar el nombre, una galeria de imagenes, las
habilidades con sus detalles y el rango.
 */