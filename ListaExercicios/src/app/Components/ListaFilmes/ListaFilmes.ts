import { Component, signal } from '@angular/core';
import { EstrelasAvaliacaoComponent } from '../EstrelasAvaliacao/EstrelasAvaliacao';

interface Filme {
  id: number;
  titulo: string;
  nota: number;
}

@Component({
  selector: 'app-lista-filmes',
  standalone: true,
  imports: [EstrelasAvaliacaoComponent],  
  templateUrl: './ListaFilmes.html',
  styleUrl: './ListaFilmes.css'
})
export class ListaFilmesComponent {
 
  filmes = signal<Filme[]>([
    { id: 1, titulo: 'Interestelar', nota: 5 },
    { id: 2, titulo: 'O Poderoso Chefão', nota: 4.8 },
    { id: 3, titulo: 'Matrix', nota: 4 },
    { id: 4, titulo: 'Filme Ruim de Teste', nota: 1 },
    { id: 5, titulo: 'Filme Nota Incorreta', nota: 7 }  
  ]);
}
