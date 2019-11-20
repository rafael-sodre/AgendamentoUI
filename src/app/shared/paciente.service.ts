import { Paciente } from './paciente.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  formData: Paciente;
  readonly rootURL = 'http://localhost:5000/api';
  list : Paciente[];

  constructor(private http: HttpClient) { }

  postPaciente() {
    return this.http.post(this.rootURL + '/paciente', this.formData);
  }

  putPaciente(){
    return this.http.put(this.rootURL + '/paciente/' + this.formData.Id, this.formData);
  }

  deletePaciente(id){
    return this.http.delete(this.rootURL + '/paciente/' + id)
  }

  refreshList(){
    this.http.get(this.rootURL + '/paciente')
    .toPromise()
    .then(res => this.list = res as Paciente[]);
  }
}
