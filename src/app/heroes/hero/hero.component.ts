import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public  name:string ="Iroman";
public  age:number =10;


get  capitalizerName():string{
  return   this.name.toLocaleUpperCase();

}


getHeroDescription():string{
  return  `${this.name} - ${this.age} `;
}

changeHero():void{

  this.name ='Spiderman';

}

changeAge(){

  this.age=25;

}

resetForm():void{

  this.name="iroman";
 this.age=45;

}


}
