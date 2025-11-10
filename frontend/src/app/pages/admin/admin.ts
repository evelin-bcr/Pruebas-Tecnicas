import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosDeptosService } from '../../services/empleados-deptos';

@Component({
  selector: 'app-departamentos-empleados',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']  
})
export class Admin implements OnInit {
  
  private empleadosDeptosService = inject(EmpleadosDeptosService);
  
  departamentos: any[] = [];

  ngOnInit() {
    this.empleadosDeptosService.getDepartamentos().subscribe((data: any) => {
      this.departamentos = data;
    });
  }
}