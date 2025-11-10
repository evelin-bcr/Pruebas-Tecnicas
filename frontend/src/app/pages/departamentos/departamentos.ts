import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartamentosService } from '../../services/departamentos';
import { Departamento } from '../../../interfaces/departamentos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departamentos.html',
  styleUrls: ['./departamentos.css']
})
export class Departamentos implements OnInit {
  departamentos: Departamento[] = [];

  departamento: Departamento = { codigo: 0, nombre: '' };

  mostrarModal = false;
  editando = false;
  idEditando: string = '';

  constructor(private departamentosService: DepartamentosService) {}

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

  obtenerDepartamentos() {
    this.departamentosService.getDepartamentos().subscribe({
      next: (response: any) => {
        this.departamentos = response.data;
      },
      error: (err) => console.error('Error al obtener departamentos', err)
    });
  }

  abrirModal() {
    this.mostrarModal = true;
    this.editando = false;
    this.departamento = { codigo: 0, nombre: '' };
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  editar(dep: Departamento) {
    this.mostrarModal = true;
    this.editando = true;
    this.idEditando = dep._id!;
    this.departamento = { ...dep };
  }

  guardar() {
    if (this.editando) {
      this.departamentosService.putDepartamento(this.departamento, this.idEditando).subscribe({
        next: () => {
          this.obtenerDepartamentos();
          this.cerrarModal();
          Swal.fire('Actualizado', 'El departamento fue actualizado correctamente', 'success');
        },
        error: (err) => console.error('Error al actualizar departamento', err)
      });
    } else {
      this.departamentosService.postDepartamento(this.departamento).subscribe({
        next: () => {
          this.obtenerDepartamentos();
          this.cerrarModal();
          Swal.fire('Creado', 'Departamento agregado correctamente', 'success');
        },
        error: (err) => console.error('Error al crear departamento', err)
      });
    }
  }

  eliminar(id: string) {
    Swal.fire({
      title: '¿Eliminar departamento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.departamentosService.deleteDepartamento(id).subscribe({
          next: () => {
            this.obtenerDepartamentos();
            Swal.fire('Eliminado', '', 'success');
          },
          error: () => Swal.fire('Error al eliminar', '', 'error')
        });
      }
    });
  }
}
