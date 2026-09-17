import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: true,
  templateUrl: './ConversorTemperatura.html',
  styleUrl: './ConversorTemperatura.css'
})
export class ConversorTemperaturaComponent {
 
  celsius = signal<number>(0);

 
  fahrenheit = computed(() => {
    return Number(((this.celsius() * 9) / 5 + 32).toFixed(1));
  });

  
  kelvin = computed(() => {
    return Number((this.celsius() + 273.15).toFixed(1));
  });

   
  descricaoClima = computed(() => {
    const temp = this.celsius();
    if (temp <= 0) {
      return '🥶 Congelando!';
    } else if (temp > 0 && temp <= 15) {
      return '🍁 Frio';
    } else if (temp > 15 && temp <= 25) {
      return '☀️ Agradável';
    } else {
      return '🔥 Quente!';
    }
  });

  atualizarTemperatura(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.celsius.set(Number(elementoInput.value));
  }
}
