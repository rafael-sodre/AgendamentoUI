import { MedicoService } from 'src/app/shared/medico.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  constructor(private service: MedicoService) { }

  ngOnInit() {
    this.resetFom();
  }

  resetFom(formMedico?: NgForm){
    if (formMedico != null)
    formMedico.form.reset();
   this.service.formData = {
      Id: 0,
      Nome: '',
      Sobrenome: '',
      Crm: ''
   }
  }

  onSubmit(formMedico: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(formMedico)
    else
      this.updateRecord(formMedico);
   }
  
   insertRecord(formMedico: NgForm) {
     this.service.postMedico().subscribe(
       res => {
         debugger;
         this.resetFom(formMedico);
         this.service.refreshList();
       },
       err => {
         debugger;
         console.log(err);
       }
     )
   }
  
   updateRecord(formMedico: NgForm) {
    this.service.putMedico().subscribe(
      res => {
        this.resetFom(formMedico);
        //this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  Teste(formMedico: NgForm){
    console.log(formMedico.value)
  }
}
