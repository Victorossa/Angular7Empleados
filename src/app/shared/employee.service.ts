import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
//Importacion para la conexion por http Ojo Este tambien va en el modulo principal pero el HttpClientModule
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Creamos la variable que inyecta el modelo a utilizar en el Servicio
  formdata: Employee;

  //Se crea variable privada de conexion en el constructor de la clase para la conexion
  constructor(private http: HttpClient) { }

  //Metodo Post, este coincide con el nombre del metodo en el API 
  postEmployye(formdata: Employee) {
    //utiliza el metodo post del http que tiene como parametro la url y el objeto data
    return this.http.post(environment.rootURL + '/Employye', formdata);
  }
}
