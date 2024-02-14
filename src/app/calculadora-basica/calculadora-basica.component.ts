import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-basica',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-basica.component.html',
  styleUrl: './calculadora-basica.component.scss'
})
export class CalculadoraBasicaComponent {
  result: string = '';

  appendToResult(value: string) {
    this.result += value;
  }

  deleteLastDigit() {
    if (this.result.length > 0) {
      this.result = this.result.slice(0, -1);
    }
  }

  changeSign() {
    if (this.result.length > 0) {
      // Verificar si el primer carácter es un signo menos
      if (this.result.charAt(0) === '-') {
        // Si es negativo, quitar el signo menos
        this.result = this.result.slice(1);
      } else {
        // Si es positivo, agregar un signo menos al principio
        this.result = '-' + this.result;
      }
    }
  }

  clear() {
    this.result = '';
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }
}
