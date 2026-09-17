import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-calculadora-gorjeta',
  standalone: true,
  templateUrl: './CalculadoraGorjeta.html',
  styleUrl: './CalculadoraGorjeta.css'
})
export class CalculadoraGorjetaComponent {
 
  valorConta = signal<number>(0);
  quantidadePessoas = signal<number>(1); 
  porcentagemGorjeta = signal<number>(10);  

 
  valorGorjeta = computed(() => {
    return Number(((this.valorConta() * this.porcentagemGorjeta()) / 100).toFixed(2));
  });

   
  totalComGorjeta = computed(() => {
    return Number((this.valorConta() + this.valorGorjeta()).toFixed(2));
  });

  
  valorPorPessoa = computed(() => {
    const pessoas = this.quantidadePessoas();
   
    const divisor = pessoas > 0 ? pessoas : 1;
    return Number((this.totalComGorjeta() / divisor).toFixed(2));
  });

  
  mudarValorConta(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.valorConta.set(Number(input.value));
  }

  mudarQuantidadePessoas(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.quantidadePessoas.set(Number(input.value));
  }

  mudarPorcentagem(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.porcentagemGorjeta.set(Number(input.value));
  }
}
