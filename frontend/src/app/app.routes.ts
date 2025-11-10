import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Empleados } from './pages/empleados/empleados';
import { Departamentos } from './pages/departamentos/departamentos';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Inicio - Gestión Empresarial' },
    { path: 'empleados', component: Empleados, title: 'Gestión de Empleados' },
    { path: 'departamentos', component: Departamentos, title: 'Gestión de Departamentos' },
    { path: 'admin', component: Admin, title: 'Estructura Organizacional' },
    { path: '**', redirectTo: '/home' }
];