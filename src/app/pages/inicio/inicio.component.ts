import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Game>;

  constructor( private afs: AngularFirestore ) {
    
    this.itemsCollection = afs.collection<Game>('goty');
    this.itemsCollection.valueChanges().subscribe( (resp)=> {
      console.log(resp);
    });

   }

  ngOnInit(): void {

  }

}
