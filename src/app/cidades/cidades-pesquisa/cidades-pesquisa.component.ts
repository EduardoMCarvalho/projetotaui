import { Component, OnInit, ViewChild } from '@angular/core';
import { CidadeFiltro, CidadeService } from '../cidades.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CidadeFiltro();
  cidades = [];

  @ViewChild('tabela', {static:true}) grid;
  constructor(private cidadesService: CidadeService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.cidadesService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.cidades = resultado.cidades;
      });
  }
  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(cidade: any) {
    this.cidadesService.excluir(cidade.id)
    .then(() =>
    {
      if (this.grid.first === 0) {
        this.pesquisar();
      }
      else{
        this.grid.first = 0;
      }
    }
    )
  }

}
