import { Component } from '@angular/core';
import { DadoComponent } from "../dado/dado.component";

@Component({
  selector: 'app-tirardados',
  imports: [DadoComponent],
  templateUrl: './tirardados.component.html',
  styleUrl: './tirardados.component.css'
})
export class TirardadosComponent {
  n1: number = 0
  n2: number = 0
  n3: number = 0
  resultado: string = "Tira para jugar"
  contador: number = 0

  tirar() {
    //1...6 numeros aleatorios
    this.n1=Math.round(Math.random() * 5) + 1
    this.n2=Math.round(Math.random() * 5) + 1
    this.n3=Math.round(Math.random() * 5) + 1
    if (this.n1==this.n2 && this.n1==this.n3) {
      this.resultado = "¡Ganaste!"
      this.contador++
    } else {
      this.resultado = "Perdiste :("
      this.contador--
    }
  }
}
