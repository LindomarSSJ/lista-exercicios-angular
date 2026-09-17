import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-espelho-maluco',
  standalone: true,
  templateUrl: './EspelhoMaluco.html',
  styleUrl: './EspelhoMaluco.css'
})
export class EspelhoMalucoComponent {
 
  texto = signal<string>('');

   
  textoMaiusculo = computed(() => {
    return this.texto().toUpperCase();
  });

 
  textoInvertido = computed(() => {
 
    return this.texto().split('').reverse().join('');
  });

  
  totalPalavras = computed(() => {
    const textoLimpo = this.texto().trim();
    if (textoLimpo === '') {
      return 0;
    }
   
    return textoLimpo.split(/\s+/).length;
  });

 
  caracteresSemEspaco = computed(() => {
   
    return this.texto().replace(/\s/g, '').length;
  });

  atualizarTexto(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.texto.set(elementoInput.value);
  }
}
