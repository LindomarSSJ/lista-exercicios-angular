import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-adivinhe-numero',
  standalone: true,
  templateUrl: './AdivinheNumero.html',
  styleUrl: './AdivinheNumero.css'
})
export class AdivinheNumeroComponent implements OnInit {
 
  numeroSecreto = signal<number>(0);
  chuteUsuario = signal<number | null>(null);
  tentativas = signal<number>(0);
  dica = signal<string>('');
  jogoConcluido = signal<boolean>(false);
  desistiu = signal<boolean>(false);

  ngOnInit() {
    this.iniciarNovoJogo();
  }

  iniciarNovoJogo() { 
    const sorteio = Math.floor(Math.random() * 100) + 1;
    this.numeroSecreto.set(sorteio);
     
    this.chuteUsuario.set(null);
    this.tentativas.set(0);
    this.dica.set('Boa sorte! Faça o seu primeiro chute.');
    this.jogoConcluido.set(false);
    this.desistiu.set(false);
  }

  guardarChute(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.chuteUsuario.set(input.value ? Number(input.value) : null);
  }

  verificarChute() {
    const chute = this.chuteUsuario();
     
    if (chute === null || isNaN(chute)) {
      this.dica.set('⚠️ Por favor, digite um número válido!');
      return;
    }

   
    this.tentativas.update(t => t + 1);

    if (chute === this.numeroSecreto()) {
      this.dica.set(`🎉 Parabéns! Você acertou em ${this.tentativas()} tentativas!`);
      this.jogoConcluido.set(true);
    } else if (chute < this.numeroSecreto()) {
      this.dica.set('📈 O número secreto é MAIOR do que o seu chute.');
    } else {
      this.dica.set('📉 O número secreto é MENOR do que o seu chute.');
    }
  }

  revelarResposta() {
    this.desistiu.set(true);
    this.dica.set(`Fim de jogo! O número secreto era: ${this.numeroSecreto()}.`);
  }
}
