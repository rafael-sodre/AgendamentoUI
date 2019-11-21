import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './Pacientes/paciente/paciente.component';
import { PacienteListComponent } from './Pacientes/paciente-list/paciente-list.component';
import { PacienteService } from './shared/paciente.service';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico/medico.component';
import { MedicoListComponent } from './medicos/medico-list/medico-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    PacienteComponent,
    PacienteListComponent,
    MedicosComponent,
    MedicoComponent,
    MedicoListComponent
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
