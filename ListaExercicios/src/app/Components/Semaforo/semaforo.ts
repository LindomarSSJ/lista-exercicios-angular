import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: true,
  templateUrl: './Semaforo.html',
  styleUrl: './Semaforo.css'
})
export class SemaforoComponent {
   
  corAtual = signal<string>('vermelho');

  proximaCor() {
    
    if (this.corAtual() === 'vermelho') {
      this.corAtual.set('amarelo');
    } else if (this.corAtual() === 'amarelo') {
      this.corAtual.set('verde');
    } else {
      this.corAtual.set('vermelho');
    }
  }
}
