import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init:number=0;
  public counter:number=0;
  private countdownTimerRef:any = null; 

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeOutRef();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Valor de init cambió a: ", changes ['init'].currentValue);
    this.startCountdown(); 
  }

  startCountdown(){
    if(this.init && this.init > 0){
      this.clearTimeOutRef();  // Limpia el temporizador actual, si existe.
      this.counter = this.init;
      this.doCountdown();
    }
  }
  doCountdown() {
    this.countdownTimerRef = setTimeout(()=>{
      this.counter = this.counter - 1;
      this.processCountdown();

    },1000);
  }

  private clearTimeOutRef(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  processCountdown() {

    this.onDecrease.emit(this.counter);
    //emitir el conteo
    console.log('La cuenta va en:', this.counter);

    if(this.counter == 0){
      //emitir un evento Counter End
      this.onComplete.emit();
     // alert("El contador ha terminado");
      console.log("---- Fin del Contador  -----");
    }else{
      this.doCountdown();
    }
  }

}
