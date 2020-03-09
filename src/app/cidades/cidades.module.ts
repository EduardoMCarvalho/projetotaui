import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CidadesPesquisaComponent],
  exports: [CidadesPesquisaComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CidadesModule { }
