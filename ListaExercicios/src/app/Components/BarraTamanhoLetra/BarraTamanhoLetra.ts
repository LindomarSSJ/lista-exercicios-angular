import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-barra-tamanho-letra',
  standalone: true,
  templateUrl: './BarraTamanhoLetra.html',
  styleUrl: './BarraTamanhoLetra.css'
})
export class BarraTamanhoLetraComponent {
 
  tamanhoFonte = signal<number>(20);

  atualizarTamanho(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    
    this.tamanhoFonte.set(Number(elementoInput.value));
  }
}
