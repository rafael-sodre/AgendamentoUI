import { PacienteService } from './../../shared/paciente.service';
import { Paciente } from './../../shared/paciente.model';
import { MedicoService } from './../../shared/medico.service'
import { Medico } from './../../shared/medico.model'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: []
})
export class ConsultaComponent implements OnInit {
  pacientes: Paciente[] = [];
  medicos: Medico [] = [];
  pacienteId : number;
  medicoId : number;
  hora: number;


  constructor(private pacienteService: PacienteService,
              private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.loadPacientes(),
    this.loadMedicos();
  }

  loadPacientes(){
    this.pacienteService.getPacientes().subscribe(pacientes => this.pacientes = pacientes as Paciente[])
  }

  loadMedicos(){
    this.medicoService.getMedicos().subscribe(medicos => this.medicos = medicos as Medico[])
  }

  horaSelecionada(hora){
    this.hora = hora;
  }
}
