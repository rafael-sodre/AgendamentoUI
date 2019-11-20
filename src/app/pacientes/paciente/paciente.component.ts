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

 resetForm(form?: NgForm) {
   if (form != null)
     form.form.reset();
   this.service.formData = {
      Id: 0,
      Nome: '',
      Sobrenome: '',
      DataNascimento: ''
  }
}

 onSubmit(form: NgForm) {
  if (this.service.formData.Id == 0)
  this.insertRecord(form)
 }

 insertRecord(form: NgForm) {
   this.service.postPaciente().subscribe(
     res => {
       debugger;
       this.resetForm(form);
       this.service.refreshList();
     },
     err => {
       debugger;
       console.log(err);
     }
   )
 }

 updateRecord(form: NgForm) {
  this.service.putPaciente().subscribe(
    res => {
      this.resetForm(form);
      //this.toastr.info('Submitted successfully', 'Payment Detail Register');
      this.service.refreshList();
    },
    err => {
      console.log(err);
    }
  )
}

 

}

