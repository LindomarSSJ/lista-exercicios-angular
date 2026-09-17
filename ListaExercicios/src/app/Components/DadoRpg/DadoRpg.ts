import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-dado-rpg',
  standalone: true,
  templateUrl: './DadoRpg.html',
  styleUrl: './DadoRpg.css'
})
export class DadoRpgComponent {
 
  resultadoAtual = signal<number | null>(null);
  totalRolagens = signal<number>(0);
  somaResultados = signal<number>(0);

 
  mediaRolagens = computed(() => {
    const total = this.totalRolagens();
    if (total === 0) {
      return 0;
    }
    
    return Number((this.somaResultados() / total).toFixed(2));
  });

  rolarDado() {
 
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    
     
    this.resultadoAtual.set(novoNumero);
    this.totalRolagens.update(total => total + 1);
    this.somaResultados.update(soma => soma + novoNumero);
  }
}
