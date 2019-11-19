import { Paciente } from './paciente.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {
  formData: Paciente;
  readonly rootURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  postPaciente() {
    var par = {Nome:'teste',
               Sobrenome:'sobrenome',
              DataNascimento:'data' }
    return this.http.post(this.rootURL + '/paciente', par);
  }

  testeGet(){
    return this.http.get(this.rootURL + '/paciente/1');
  }

  testePost() {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'}

     var par = {nome: "Fernanda",
                sobrenome: "Almeida",
                datanascimento: "2019-11-16"}
    return this.http.post(this.rootURL + '/paciente', par,);
  }

}
