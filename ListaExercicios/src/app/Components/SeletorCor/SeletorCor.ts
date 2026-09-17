import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-seletor-cor',
  standalone: true,
  templateUrl: './SeletorCor.html',
  styleUrl: './SeletorCor.css'
})
export class SeletorCorComponent {
 
  corEscolhida = signal<string>('#3498db');

  atualizarCor(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.corEscolhida.set(elementoInput.value);
  }
}
