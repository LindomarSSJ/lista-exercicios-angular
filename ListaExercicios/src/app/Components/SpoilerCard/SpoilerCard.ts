import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-spoiler-card',
  standalone: true,
  templateUrl: './SpoilerCard.html',
  styleUrl: './SpoilerCard.css'
})
export class SpoilerCardComponent {
 
  exibirResposta = signal<boolean>(false);

  alternarVisibilidade() {
    
    this.exibirResposta.update(estado => !estado);
  }
}
