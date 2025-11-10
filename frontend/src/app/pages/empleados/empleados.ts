import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados';
import { Empleado } from '../../../interfaces/empleados';
import { DepartamentosService } from '../../services/departamentos'; 
import { Departamento } from '../../../interfaces/departamentos'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class Empleados implements OnInit {
  empleados: Empleado[] = [];
  departamentos: Departamento[] = []; 

  empleado: Empleado = {
    codigo: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    codigo_departamento: {
      codigo: '',
      nombre: ''
    }
  };

  mostrarModal = false;
  editando = false;
  idEditando: string = '';

 
  constructor(
    private empleadosService: EmpleadosService,
    private departamentosService: DepartamentosService
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.obtenerDepartamentos();
  }

  obtenerEmpleados() {
    this.empleadosService.getEmpleados().subscribe({
      next: (response: any) => {
        this.empleados = response.data; 
      },
      error: (err) => console.error('Error al obtener empleados', err)
    });
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
    this.empleado = {
      codigo: 0,
      nombre: '',
      apellido1: '',
      apellido2: '',
      codigo_departamento: {
        codigo: '',
        nombre: ''
      }
    };
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  editar(emp: Empleado) {
    this.mostrarModal = true;
    this.editando = true;
    this.idEditando = emp._id!;
  
    this.empleado = {
      _id: emp._id,
      codigo: emp.codigo,
      nombre: emp.nombre,
      apellido1: emp.apellido1,
      apellido2: emp.apellido2,
      codigo_departamento: (emp.codigo_departamento as any)._id || ''
    };
  }
  

  guardar() {
    const payload = {
      ...this.empleado,
      codigo_departamento:
        typeof this.empleado.codigo_departamento === 'object'
          ? (this.empleado.codigo_departamento as any)._id || this.empleado.codigo_departamento
          : this.empleado.codigo_departamento
    };

    if (this.editando) {
      this.empleadosService.putEmpleado(payload, this.idEditando).subscribe({
        next: () => {
          this.obtenerEmpleados();
          this.cerrarModal();
        },
        error: (err) => console.error('Error al actualizar empleado', err)
      });
    } else {
      this.empleadosService.postEmpleado(payload).subscribe({
        next: () => {
          this.obtenerEmpleados();
          this.cerrarModal();
        },
        error: (err) => console.error('Error al crear empleado', err)
      });
    }
  }

  eliminar(id: string) {
    Swal.fire({
      title: '¿Eliminar empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadosService.deleteEmpleado(id).subscribe({
          next: () => {
            this.obtenerEmpleados();
            Swal.fire('Eliminado', '', 'success');
          },
          error: () => {
            Swal.fire('Error al eliminar', '', 'error');
          }
        });
      }
    });
  }}  