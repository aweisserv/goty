import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor( private http: HttpClient ) {   }

  getNominados() {
    return this.http.get(`${ environment.url }/api/goty`)
  }


}
