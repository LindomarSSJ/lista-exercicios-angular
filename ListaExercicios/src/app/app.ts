import { Component, signal } from '@angular/core';
import { SeletorTemaComponent } from './Components/SeletorTema/SeletorTema';
import { QuadradoQueCresceComponent } from './Components/QuadradoQueCresce/QuadradoQueCresce';
import { ContadorPenalidadeComponent } from './Components/ContadorPenalidade/ContadorPenalidade';
import { SemaforoComponent } from './Components/Semaforo/semaforo';
import { InterruptorLuzComponent } from './Components/InterruptorLuz/InterruptorLuz';
import { DadoRpgComponent } from './Components/DadoRpg/DadoRpg';
import { MeuNomeNaTelaComponent } from './Components/MeuNomeNaTela/MeuNomeNaTela';
import { BarraTamanhoLetraComponent } from './Components/BarraTamanhoLetra/BarraTamanhoLetra';
import { SeletorCorComponent } from './Components/SeletorCor/SeletorCor';
import { ContadorCaracteresComponent } from './Components/ContadorCaracteres/ContadorCaracteres';
import { EspelhoMalucoComponent } from './Components/EspelhoMaluco/EspelhoMaluco';
import { ConversorTemperaturaComponent } from './Components/ConversorTemperatura/ConversorTemperatura';
import { CalculadoraGorjetaComponent } from './Components/CalculadoraGorjeta/CalculadoraGorjeta';
import { AdivinheNumeroComponent } from './Components/AdivinheNumero/AdivinheNumero';
import { SpoilerCardComponent } from './Components/SpoilerCard/SpoilerCard';
import { ListaFilmesComponent } from './Components/ListaFilmes/ListaFilmes';

@Component({
  selector: 'app-root',
  standalone: true,
 
  imports: [
    SeletorTemaComponent, 
    QuadradoQueCresceComponent, 
    ContadorPenalidadeComponent, 
    SemaforoComponent, 
    InterruptorLuzComponent, 
    DadoRpgComponent, 
    MeuNomeNaTelaComponent, 
    BarraTamanhoLetraComponent, 
    SeletorCorComponent, 
    ContadorCaracteresComponent,
    EspelhoMalucoComponent,
    ConversorTemperaturaComponent,
    CalculadoraGorjetaComponent,
    AdivinheNumeroComponent,
    SpoilerCardComponent,
    ListaFilmesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  temaAtual = signal<string>('claro');

  alterarTema(novoTema: string) {
    this.temaAtual.set(novoTema);
  }
}
