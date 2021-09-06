import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../pages/navbar/navbar.component';
import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BarchartComponent
  ],
  exports: [
    NavbarComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
