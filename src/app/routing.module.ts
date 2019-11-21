import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ConsultasComponent } from './consultas/consultas.component';

const routes: Routes = [
  {path:"pacientes",component: PacientesComponent},
  {path:"medicos",component: MedicosComponent},
  {path:"consultas",component: ConsultasComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
