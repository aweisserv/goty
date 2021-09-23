import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

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
      .subscribe( (games) => {
        this.games = games;
      });
    }

  voteGame( game: Game ){

    this.gameService.voteGame(game.id)
      .subscribe( resp=> {
        console.log(resp);
      } )

  }

}
