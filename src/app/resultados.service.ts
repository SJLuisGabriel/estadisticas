import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultadosService {
  resultados: any[] = [];

  constructor() {}

  agregarResultado(resultado: any) {
    this.resultados.push(resultado);
  }
}
