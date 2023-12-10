import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GavilanezJhostyn_Laboratorio1';


  counterProgress:number = 0;
  totalCountdown:number = 15;

  //Metodo de Actualizar el conteo 
  updateProgress($event:number) {
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100;
  }
  //Metodo de Finzaliacion del conteo 
  countdownFinished(){
    console.log("El conteo Finalizó");
  }

}
