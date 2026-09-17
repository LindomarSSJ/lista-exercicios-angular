import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-meu-nome-na-tela',
  standalone: true,
  templateUrl: './MeuNomeNaTela.html',
  styleUrl: './MeuNomeNaTela.css'
})
export class MeuNomeNaTelaComponent {
 
  nome = signal<string>('');

 
  saudacao = computed(() => {
    
    if (this.nome().trim() === '') {
      return 'Olá, visitante!';
    }
    return `Olá, ${this.nome()}!`;
  });

  atualizarNome(evento: Event) {
     
    const elementoInput = evento.target as HTMLInputElement;
    this.nome.set(elementoInput.value);
  }
}
