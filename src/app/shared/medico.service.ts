import { Medico } from './medico.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MedicoService {
  formData: Medico;
  readonly rootURL = 'http://localhost:5000/api';
  list : Medico[];

  constructor(private http: HttpClient) { }

  postMedico(){
    return this.http.post(this.rootURL + '/medico', this.formData);
  }

  putMedico(){
    return this.http.put(this.rootURL + '/medico/' + this.formData.Id, this.formData);
  }

  deleteMedico(id){
    return this.http.delete(this.rootURL + '/medico/' + id)
  }

  getMedicos(){
    return this.http.get(this.rootURL + '/medico')
  }

  refreshList(){
    this.http.get(this.rootURL + '/medico')
    .toPromise()
    .then(res => this.list = res as Medico[]);
  }
}
