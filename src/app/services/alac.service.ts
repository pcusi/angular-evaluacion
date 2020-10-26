/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/Person';
import {Data} from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class AlacService {

  constructor(
    private _http: HttpClient
  ) { }


  register(person: Person) {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.post('http://localhost:3000/registro', JSON.stringify(person), {headers});
  }

  registerUser(data: Data) {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.post('http://localhost:3000/registro-usuario', JSON.stringify(data), {headers});
  }

  updateUser(data: Data) {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.put('http://localhost:3000/editar-usuario/' + data.id, JSON.stringify(data), {headers});
  }

  login(person: Person) {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.post('http://localhost:3000/login', JSON.stringify(person), {headers});
  }

  getLista() {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.get('http://localhost:3000/lista', {headers});
  }

  getMiUsuario(data: Data) {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.get('http://localhost:3000/mi-usuario/' + data.id, {headers});
  }


}
