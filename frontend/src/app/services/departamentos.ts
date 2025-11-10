import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Departamento } from '../../interfaces/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  // 1. Inyección de dependencias
  private _httpClient = inject(HttpClient);

  // 2. Definir la URL base del backend
  private apiUrl = environment.appUrl + '/departamentos';

  // 3. Métodos para las peticiones HTTP

  // Crear departamento (POST)
  postDepartamento(departamentoToCreate: Departamento) {
    return this._httpClient.post(this.apiUrl, departamentoToCreate);
  }

  // Obtener todos los departamentos (GET)
  getDepartamentos() {
    return this._httpClient.get(this.apiUrl);
  }

  // Actualizar departamento por ID (PUT)
  putDepartamento(departamentoToUpdate: Departamento, id: string) {
    return this._httpClient.put(`${this.apiUrl}/${id}`, departamentoToUpdate);
  }

  // Eliminar departamento por ID (DELETE)
  deleteDepartamento(id: string) {
    return this._httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
