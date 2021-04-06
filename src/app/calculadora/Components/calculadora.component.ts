import { Component, OnInit } from '@angular/core';

//Essa anotação abaixo é oq faz ele ser declarado um Component
@Component({
  //O component gera uma tag html, nomeada através do atributo abaixo
  selector: 'app-calculadora',
  //O template do html fica abaixo
  //É possível remover a Url do nome abaixo, mas não é recomendável
  //Se o código HTML for extenso
  templateUrl: './calculadora.component.html',
  //O código css do component fica abaixo
  styleUrls: ['./calculadora.component.css']
})

//Método de inicialização do Angular
//É chamado logo que um objeto é instânciado ou concluído
export class CalculadoraComponent implements OnInit {

  //Método invocado quando o objeto é criado
  constructor() { }

  //ngOnInit é para caso tenha uma inicialização mais pesada
  //ou que possa impactar na criação do objeto
  //por exemplo, consultar uma base de dados
  ngOnInit(): void {
  }

}
