import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './Pacientes/paciente/paciente.component';
import { PacienteListComponent } from './Pacientes/paciente-list/paciente-list.component';
import { PacienteService } from './shared/paciente.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    PacienteComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
