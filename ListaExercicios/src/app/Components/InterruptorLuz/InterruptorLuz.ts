import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-interruptor-luz',
  standalone: true,
  templateUrl: './InterruptorLuz.html',
  styleUrl: './InterruptorLuz.css'
})
export class InterruptorLuzComponent {
 
  luzAcesa = signal<boolean>(false);

  alternarLuz() {
     
    this.luzAcesa.update(estado => !estado);
  }
}
