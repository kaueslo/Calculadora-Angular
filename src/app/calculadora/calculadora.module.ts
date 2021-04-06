import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Realizando o mesmo feito do módulo, chamamos um arquivo index.ts
//Exportamos lá
import { CalculadoraComponent } from './Components';
import { CalculadoraService } from './services';


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
  //Importa lá em cima o serviço da Calculadora
  //E declara como provider, é um provedor de serviços
  //Assim é possível consumir ele
  providers: [
    CalculadoraService
  ],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
