import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Empleado } from '../../interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _httpClient = inject(HttpClient);
  private apiUrl = environment.appUrl + '/empleados';

  postEmpleado(empleadoToCreate: Empleado) {
    return this._httpClient.post(this.apiUrl, empleadoToCreate);
  }

  getEmpleados() {
    return this._httpClient.get(this.apiUrl);
  }

  putEmpleado(empleadoToUpdate: Empleado, id: string) {
    return this._httpClient.put(`${this.apiUrl}/${id}`, empleadoToUpdate);
  }

  deleteEmpleado(id: string) {
    return this._httpClient.delete(`${this.apiUrl}/${id}`);
  }
}

