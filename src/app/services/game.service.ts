import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class GameService {

  games: Game[] = [];

  constructor( private http: HttpClient ) {   }

  getNominados() {

    if( this.games.length > 0 ) {
      // no hay juegos
      console.log("Desde caché");
      return of(this.games);


    }else{
      console.log("Desde internet");
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
      .pipe(
        tap(
          games => this.games = games
        )
      );
    }
 
  }

  voteGame( id: string ){

    return this.http.post(`${ environment.url }/api/goty/${ id }`, {});

  }


}
