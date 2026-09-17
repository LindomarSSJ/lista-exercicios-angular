import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-contador-penalidade',
  standalone: true,
  templateUrl: './ContadorPenalidade.html',
  styleUrl: './ContadorPenalidade.css'
})
export class ContadorPenalidadeComponent {
 
  cliques = signal<number>(0);

   
  classeBotao = computed(() => {
    if (this.cliques() >= 10) {
      return 'botao-exagerado';
    }
    return 'botao-normal';
  });

  adicionar() {
    this.cliques.update(valor => valor + 1);
  }

  zerar() {
    this.cliques.set(0);
  }
}
