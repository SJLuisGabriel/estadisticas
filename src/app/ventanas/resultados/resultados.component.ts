import { Component } from '@angular/core';
import { ResultadosService } from '../../resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent {
  resultados: any[] = [];

  constructor(private resultadosService: ResultadosService) {
    this.resultados = this.resultadosService.resultados;
    console.log(
      'estos son los resultados enviado',
      this.resultadosService.resultados
    );
  }

  getValor(resultadoBody: string, metodo: string): string {
    try {
      const parsedResult = JSON.parse(resultadoBody);
      return parsedResult[metodo];
    } catch (error) {
      console.error('Error al obtener', error);
      return 'Error';
    }
  }
}
