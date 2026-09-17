import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-estrelas-avaliacao',
  standalone: true,
  templateUrl: './EstrelasAvaliacao.html',
  styleUrl: './EstrelasAvaliacao.css'
})
export class EstrelasAvaliacaoComponent {
 
  notaOriginal = input<number>(0);
 
  notaValidada = computed(() => {
    return Math.max(0, Math.min(5, Math.round(this.notaOriginal())));
  });

   
  estrelas = computed(() => {
    const nota = this.notaValidada();
    
    return Array.from({ length: 5 }, (_, i) => i + 1 <= nota);
  });
}
