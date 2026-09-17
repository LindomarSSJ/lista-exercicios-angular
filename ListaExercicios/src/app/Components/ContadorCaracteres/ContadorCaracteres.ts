import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-contador-caracteres',
  standalone: true,
  templateUrl: './ContadorCaracteres.html',
  styleUrl: './ContadorCaracteres.css'
})
export class ContadorCaracteresComponent {
 
  texto = signal<string>('');
 
  restantes = computed(() => {
    return 140 - this.texto().length;
  });

   
  passouDoLimite = computed(() => {
    return this.restantes() < 0;
  });

  atualizarTexto(evento: Event) {
    const elementoTextarea = evento.target as HTMLTextAreaElement;
    this.texto.set(elementoTextarea.value);
  }
}
