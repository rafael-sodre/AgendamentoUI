import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSelectModule } from 'ngx-select-ex';


import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './Pacientes/paciente/paciente.component';
import { PacienteListComponent } from './Pacientes/paciente-list/paciente-list.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico/medico.component';
import { MedicoListComponent } from './medicos/medico-list/medico-list.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConsultaComponent } from './consultas/consulta/consulta.component';
import { ConsultaListComponent } from './consultas/consulta-list/consulta-list.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    PacienteComponent,
    PacienteListComponent,
    MedicosComponent,
    MedicoComponent,
    MedicoListComponent,
    ConsultasComponent,
    ConsultaComponent,
    ConsultaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSelectModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
