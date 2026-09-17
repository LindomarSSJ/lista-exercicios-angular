import { Component, output } from '@angular/core';

@Component({
  selector: 'app-seletor-tema',
  standalone: true,
  templateUrl: './SeletorTema.html',
  styleUrl: './SeletorTema.css'
})
export class SeletorTemaComponent {

  aoMudarTema = output<string>();

  selecionarTema(tema: string) {
    this.aoMudarTema.emit(tema);
  }
}
