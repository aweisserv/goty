import { Component } from '@angular/core';
import { results } from './data';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

  results!: any[];

  // options
  showXAxis   = true;
  showYAxis  = true;
  gradient   = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  animations = true;
  activeEntries = [];

  colorScheme = 'cool'

  constructor() { Object.assign(this, { results }) }

  onSelect(event: any) {
    console.log(event);
  }

}
