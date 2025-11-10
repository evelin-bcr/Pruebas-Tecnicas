import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Departamento } from '../../interfaces/departamentos';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosDeptosService {

  // 1. Inyección de dependencias
  private _httpClient = inject(HttpClient);

  // 2. URL base del backend
  private apiUrl = environment.appUrl + '/empleados-deptos';

  // 3. Métodos para las peticiones HTTP

  // Obtener todos los departamentos con sus empleados (GET)
  getDepartamentos() {
    return this._httpClient.get(this.apiUrl);
  }

}
