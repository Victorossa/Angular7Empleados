import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //Se inyecta en el constructor el Servicio mediante una variable privada
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    //Ubicamos el restablecimiento del formulario en la tarea de inicializacion
    this.resetForm();
  }

  //Restablecimiento de Formulario
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formdata = {
      EmployeeID: null,
      FullName: '',
      EMPCode: '',
      Mobile: '',
      Position: '',
    }
  }

  //Metodo que viene del formulario
  onSubmit(form: NgForm) {
    this.insertRecord(form)
  }

  insertRecord(form: NgForm) {
    //Guardo y limpio el formulario
    this.service.postEmployye(form.value).subscribe(res => {
      this.resetForm(form)
    })
  }
}
