import { Consulta } from './../../shared/consulta.model'
import { ConsultaService } from './../../shared/consulta.service'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styles: []
})
export class ConsultaListComponent implements OnInit {

  constructor(private service: ConsultaService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(c: Consulta) {
    this.service.formData = Object.assign({}, c);
  }

  onDelete(id) {
    if (confirm('Tem certeza que quer apagar?')) {
      this.service.deleteConsulta(id)
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
