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

  //Esta es la actividad extra 
  textoEntrada: string = '';

  onButtonClick() {
    //Por consola
    console.log('Botón clicado');
    console.log('Valor actual de textValue:', this.textoEntrada);
    //Mediante un Alert 
    alert(`Botón clicado\nValor actual de la entrada del Texto es: ${this.textoEntrada}`);
  }
  

}
