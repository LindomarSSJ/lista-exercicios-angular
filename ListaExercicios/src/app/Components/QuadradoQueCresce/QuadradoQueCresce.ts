import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quadrado-que-cresce',
  standalone: true,
  templateUrl: './QuadradoQueCresce.html',
  styleUrl: './QuadradoQueCresce.css'
})
export class QuadradoQueCresceComponent {
   
  tamanho = signal<number>(100);

  aumentar() {
    
    this.tamanho.update(valorAtual => valorAtual + 10);
  }

  diminuir() {
    this.tamanho.update(valorAtual => valorAtual - 10);
  }

  resetar() {
    
    this.tamanho.set(100);
  }
}
