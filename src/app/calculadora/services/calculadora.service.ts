import { Injectable } from '@angular/core';

//O Injectable é oq faz ele ser um serviço
//Vem do pacote angular/core
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*Define as constante utilizadas
    para identificar as operações de cálculo */
    static readonly SOMA: string = '+';
    static readonly SUBTRACAO: string = '-';
    static readonly DIVISAO: string = '/';
    static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /*Método que calcula uma operação matemáica dado
  dois números. */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number; //Armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        if(num2 == 0){
          alert('Não é possível dividir por 0');
          break
        }
        resultado = num1 / num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
