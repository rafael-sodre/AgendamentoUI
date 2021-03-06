import { Paciente } from './../../shared/paciente.model'
import { PacienteService } from './../../shared/paciente.service'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styles: []
})
export class PacienteListComponent implements OnInit {

  constructor(private service: PacienteService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Paciente) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id) {
    if (confirm('Tem certeza que deseja apagar?')) {
      this.service.deletePaciente(id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          //this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
