import { Consulta } from './consulta.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ConsultaService {
  formData: Consulta;
  readonly rootURL = 'http://localhost:5000/api';
  list : Consulta[];

  constructor(private http: HttpClient) { }

  postConsulta(){
    return this.http.post(this.rootURL + '/consulta', this.formData);
  }

  putConsulta(){
    return this.http.put(this.rootURL + '/consulta/' + this.formData.Id, this.formData);
  }

  deleteConsulta(id){
    return this.http.delete(this.rootURL + '/consulta/' + id)
  }

  getConsultas(){
    return this.http.get(this.rootURL + '/consulta')
  }

  refreshList(){
    this.http.get(this.rootURL + '/consulta')
    .toPromise()
    .then(res => this.list = res as Consulta[])
  }

}
