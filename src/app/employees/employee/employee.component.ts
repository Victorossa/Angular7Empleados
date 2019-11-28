import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //Se inyecta en el constructor el Servicio mediante una variable privada
  //Se inyecta en el constructor el Servicio Para los Avizox
  constructor(private service: EmployeeService, private toastr: ToastrService) { }

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
    //Si el ID viene Nulo es para Insertar
    if (form.value.EmployeeID == null)
      this.insertRecord(form)
    else
      //Si trae ID lo Actualiza
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    //Guardo y limpio el formulario
    this.service.postEmployye(form.value).subscribe(res => {
      //Avizo que informa que fue Guardado
      this.toastr.success('Guardado Exitoso!!!- Empleado', 'Api Angular')
      //Refresca la lista cuando guarda
      this.service.refreshList();
      this.resetForm(form);
    })
  }

  updateRecord(form: NgForm) {
    this.service.putEmployye(form.value).subscribe(res => {
      //Avizo que informa que fue Actualizado
      this.toastr.warning('Actualizado Exitoso!!!- Empleado', 'Api Angular')
      //Refresca la lista cuando guarda
      this.service.refreshList();
      this.resetForm(form);
    })
  }

  

}