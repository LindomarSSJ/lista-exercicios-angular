import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardNaveComponent } from '../CardNave/CardNave';  

 
interface Nave {
  nome: string;
  combustivel: number;
  tripulacao: number;
}

@Component({
  selector: 'app-painel-naves',
  standalone: true,
  imports: [FormsModule, CardNaveComponent],  
  templateUrl: './PainelNaves.html',
  styleUrls: ['./PainelNaves.css']
})
export class PainelNavesComponent implements OnInit {
  
  
  naves = signal<Nave[]>([]);

   
  novoNome = signal('');
  novoCombustivel = signal(100);
  novaTripulacao = signal(0);

  ngOnInit() {
 
    this.naves.set([
      { nome: 'Millennium Falcon', combustivel: 80, tripulacao: 4 },
      { nome: 'X-Wing', combustivel: 55, tripulacao: 1 },
      { nome: 'Tie Fighter', combustivel: 15, tripulacao: 0 }
    ]);
  }
 
  botaoDesabilitado = computed(() => {
    const nomeInvalido = this.novoNome().trim().length < 3;
    const combustivelInvalido = this.novoCombustivel() < 0 || this.novoCombustivel() > 100;
    return nomeInvalido || combustivelInvalido;
  });

 
  totalNaves = computed(() => this.naves().length);

   
  tripulacaoTotal = computed(() => {
    return this.naves().reduce((soma, nave) => soma + nave.tripulacao, 0);
  });

   
  alertaCombustivel = computed(() => {
    return this.naves().some(nave => nave.combustivel < 20);
  });

  
  atracarNave() {
    if (this.botaoDesabilitado()) return;

    const nova: Nave = {
      nome: this.novoNome(),
      combustivel: this.novoCombustivel(),
      tripulacao: this.novaTripulacao()
    };

    
    this.naves.update(lista => [...lista, nova]);

     
    this.novoNome.set('');
    this.novoCombustivel.set(100);
    this.novaTripulacao.set(0);
  }
}
