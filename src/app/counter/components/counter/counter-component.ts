import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `

  <hr/>
<h2>{{counter}}
</h2>
<button (click)="increaseby(+1)" > +1 </button>
<button (click)="reset(10)">reset</button>
<button (click)="increaseby(-1)" > -1 </button>

  `
})
export class CounterComponent{

  public  counter : number = 1;

 increaseby( value : number):void{

 this.counter  += value;
 }


reset( value:number ){
  this.counter = 10;
}



}
