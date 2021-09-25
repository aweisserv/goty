import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

import Swal from 'sweetalert2'
import { Game } from 'src/app/interfaces/interfaces';

@Component({
selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
      .subscribe( ( games ) => {
        this.games = games;
      });
    }

  voteGame( game: Game ){

    this.gameService.voteGame( game.id )
      .subscribe( (resp: any ) => {
        if ( resp.ok ) {
          Swal.fire({
            title: 'Gracias',
            text: resp.mensaje,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
        } else {
          Swal.fire({
            title: 'Error',
            text: resp.mensaje,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      } );

  }

}
