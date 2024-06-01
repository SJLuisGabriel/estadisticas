import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultadosService } from '../../resultados.service';

@Component({
  selector: 'app-captura-numeros',
  templateUrl: './captura-numeros.component.html',
  styleUrls: ['./captura-numeros.component.css'],
})
export class CapturaNumerosComponent {
  inputNumeros!: string;
  selectedOperacion!: string;
  alertVisible: boolean = false;
  alertMessage: string = '';
  alertSuccess: boolean = true;

  constructor(
    private http: HttpClient,
    private resultadosService: ResultadosService
  ) {}

  submitForm() {
    // Convertir los números ingresados en un array de números
    const numeros = this.inputNumeros.split(',').map(Number);

    // Validar que haya exactamente 20 números
    if (numeros.length < 20) {
      this.showAlert('Debe ingresar 20 o más números.', false);
      return;
    }

    // Crear el objeto con la operación y los números
    const requestBody = {
      operation: this.selectedOperacion,
      body: JSON.stringify({ numeros }),
    };

    // Establecer las cabeceras para la solicitud HTTP
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Realizar la solicitud HTTP POST al API de AWS
    this.http
      .post<any>(
        'https://5vg9nlhj66.execute-api.us-east-1.amazonaws.com/default/EstadisticasBasicas',
        requestBody,
        { headers }
      )
      .subscribe(
        (response) => {
          console.log(response); // Manejar la respuesta del API aquí
          this.resultadosService.agregarResultado({
            metodo: this.selectedOperacion,
            resultado: response,
            numeros: numeros,
          }); // Agregar el resultado al servicio
          this.showAlert('Solicitud ejecutada correctamente', true);
        },
        (error) => {
          console.error('Error al enviar la solicitud:', error);
          this.showAlert('Error al ejecutar la solicitud', false);
        }
      );
  }

  showAlert(message: string, success: boolean) {
    this.alertMessage = message;
    this.alertSuccess = success;
    this.alertVisible = true;
    setTimeout(() => {
      this.alertVisible = false;
    }, 3000);
  }
}
