import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Por termos feito o index.ts na pasta calculadora, ele consegue fazer o import da forma abaixo
//De uma certa forma, a classe fica pública
import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
