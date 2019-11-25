import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Creamos la variable que inyecta el modelo a utilizar en el Servicio
  formdata: Employee;
  

  constructor() { }
}
