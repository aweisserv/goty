import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
      .subscribe( (resp: any) => {
        console.log(resp);
      });
    }

}
