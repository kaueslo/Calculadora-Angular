import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Realizando o mesmo feito do módulo, chamamos um arquivo index.ts
//Exportamos lá
import { CalculadoraComponent } from './Components';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  //Para ser exibido no app.component.html a tag do component
  //Tem que fazer o export, exportando o component que contém a tag
  //No caso CalculadoraComponent, para exportar o selector: 'app-calculadora'
  exports: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
