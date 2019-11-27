import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //Variable privada con el servicio para listar los elementos
  constructor(private service: EmployeeService) { }
  //Ubicamos el cargue de los items en la tarea de inicializacion
  ngOnInit() {
    this.service.refreshList()
  }
  //metodo que tiene por parametro el que se seleccione en la lista y pobla el formulario
  populateForm(item: Employee) {
    //Carga el formulario con la informacion del que se le paso por parametro
    this.service.formdata = Object.assign({},item);
  }

}