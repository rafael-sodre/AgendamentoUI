import { PacienteService } from './../../shared/paciente.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: []
})
export class PacienteComponent implements OnInit {

  constructor(private service: PacienteService) { }

  ngOnInit() {
    this.resetForm();
  }

 resetForm(ngFormPaciente?: NgForm) {
   if (ngFormPaciente != null)
   ngFormPaciente.form.reset();
   this.service.formData = {
      Id: 0,
      Nome: '',
      Sobrenome: '',
      DataNascimento: ''
  }
}

 onSubmit(ngFormPaciente: NgForm) {
  if (this.service.formData.Id == 0)
    this.insertRecord(ngFormPaciente)
  else
    this.updateRecord(ngFormPaciente);
 }

 insertRecord(ngFormPaciente: NgForm) {
   this.service.postPaciente().subscribe(
     res => {
       debugger;
       this.resetForm(ngFormPaciente);
       this.service.refreshList();
     },
     err => {
       debugger;
       console.log(err);
     }
   )
 }

 updateRecord(ngFormPaciente: NgForm) {
  this.service.putPaciente().subscribe(
    res => {
      this.resetForm(ngFormPaciente);
      //this.toastr.info('Submitted successfully', 'Payment Detail Register');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )
}

 

}

