import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapturaNumerosComponent } from './ventanas/captura-numeros/captura-numeros.component';
import { ResultadosComponent } from './ventanas/resultados/resultados.component';

@NgModule({
  declarations: [AppComponent, CapturaNumerosComponent, ResultadosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //Aquí definimos las rutas con base a los componentes que se vayan creando
      { path: 'Capturar', component: CapturaNumerosComponent },
      { path: 'Resultados', component: ResultadosComponent },
      { path: '**', redirectTo: 'Capturar', pathMatch: 'full' },
    ]),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
