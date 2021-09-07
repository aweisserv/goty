import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
