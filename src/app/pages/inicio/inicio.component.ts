import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  games: any[] = [];

  private itemsCollection: AngularFirestoreCollection<Game>;

  constructor( private afs: AngularFirestore ) {
    
    this.itemsCollection = afs.collection<Game>('goty');
    this.itemsCollection.valueChanges()
      .pipe(
        map( (resp: Game[]) => {
          return resp.map( ({ name, votes }) => ( { name, value: votes } ))
        })
      )
      .subscribe( (resp)=> {
        this.games = resp;
      });

   }

  ngOnInit(): void {

  }

}
