import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado: string = "";

  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor'
  ];

  borrarHeroe():void{
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
