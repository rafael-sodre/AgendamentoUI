import { Medico } from './../../shared/medico.model';
import { MedicoService } from './../../shared/medico.service'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styles: []
})
export class MedicoListComponent implements OnInit {

  constructor(private service: MedicoService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(m: Medico) {
    this.service.formData = Object.assign({}, m);
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteMedico(id)
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
