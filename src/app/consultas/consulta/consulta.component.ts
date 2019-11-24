import { PacienteService } from './../../shared/paciente.service';
import { Paciente } from './../../shared/paciente.model';
import { MedicoService } from './../../shared/medico.service';
import { Medico } from './../../shared/medico.model';
import { ConsultaService } from './../../shared/consulta.service';

import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Consulta } from 'src/app/shared/consulta.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: []
})
export class ConsultaComponent implements OnInit {
  pacientes: Paciente[] = [];
  medicos: Medico [] = [];
  consultas: Consulta[] = [];
  pacienteId : number;
  medicoId : number;
  hora: string;


  constructor(private pacienteService: PacienteService,
              private medicoService: MedicoService,
              private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.resetForm();
    this.loadPacientes(),
    this.loadMedicos();
  }

  loadPacientes(){
    this.pacienteService.getPacientes().subscribe(pacientes => this.pacientes = pacientes as Paciente[])
  }

  loadMedicos(){
    this.medicoService.getMedicos().subscribe(medicos => this.medicos = medicos as Medico[])
  }

  resetForm(formConsulta?: NgForm){
    if(formConsulta != null)
      formConsulta.form.reset();
    this.consultaService.formData = {
      Id: 0,
      Inicio: '',
      Fim: '',
      medicoId: 0,
      pacienteId: 0,
      dataConsulta: ''
    }
  }

  onSubmit(formConsulta: NgForm){
    if (this.consultaService.formData.Id == 0)
      this.insertRecord(formConsulta)
    else
      this.updateRecord(formConsulta);
  }

  insertRecord(formConsulta: NgForm){
    this.consultaService.postConsulta().subscribe(
      res => {
        debugger;
        this.resetForm(formConsulta);
        this.consultaService.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(formConsulta: NgForm){
    this.consultaService.putConsulta().subscribe(
      res => {
        this.resetForm(formConsulta);
        this.consultaService.refreshList();
      },
      err =>{
        debugger;
        console.log(err);
      }
    )
  }

  Teste(){
    console.log(this.consultaService.formData.Fim)
  }
}
