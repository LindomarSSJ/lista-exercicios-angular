import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-card-nave',
  standalone: true,
  imports: [],
  templateUrl: './CardNave.html',
  styleUrls: ['./CardNave.css']
})
export class CardNaveComponent {
  
  nome = input.required<string>();
  combustivel = input(100); 
  tripulacao = input(0);    

 
  status = computed(() => {
    const comb = this.combustivel();
    if (comb > 60) return 'pronta';
    if (comb >= 20) return 'reabastecer';
    return 'em terra';
  });


  corBarra = computed(() => {
    const atual = this.status();
    if (atual === 'pronta') return 'green';
    if (atual === 'reabastecer') return 'orange';
    return 'red';
  });
}
