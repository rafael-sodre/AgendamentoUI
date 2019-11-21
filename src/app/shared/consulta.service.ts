import { Paciente } from './paciente.model'

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  formData: Paciente;
  readonly rootURL = 'http://localhost:5000/api';
  listPacientes: Paciente[]

  constructor(private http: HttpClient) { }

}
