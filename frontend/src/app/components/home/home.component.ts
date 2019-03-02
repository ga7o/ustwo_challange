import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalPokemons : number
  pokemons: Object

  constructor(private pokeApiService : PokeapiService) { }

  ngOnInit() {
    this.pokeApiService.getPokemonList()
      .subscribe((data:any) => {
        this.totalPokemons = data.count
        this.pokemons = data.results
      })
  }

}
