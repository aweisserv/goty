import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnDestroy {

  @Input() results: any[] = [];

  colors = {
    domain: ['#ffffff"', '#ffffff"', '#ffffff"', '#ffffff"']
  };
  active = true;
  
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
  colorScheme = 'nightLights';

  // intervalo;

  constructor() { 
    
  //  Object.assign(this, { results })
  
  //  this.intervalo = setInterval( ()=> {
  //    console.log('tick');
  //    const newResults = [...this.results]
//
  //    for( let i in newResults ){
  //      newResults[i].value = Math.round( Math.random() * 500 )
  //    }
//
  //    this.results = [...newResults];
  //  }, 1500 );
  
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
    this.active = true;
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    this.active = false;
  }

  ngOnDestroy() {
  //  clearInterval( this.intervalo );
  }

}
