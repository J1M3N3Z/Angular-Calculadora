import { Routes } from '@angular/router';
import { CalculadoraBasicaComponent } from './calculadora-basica/calculadora-basica.component';
import { CalculadoraCientificaComponent } from './calculadora-cientifica/calculadora-cientifica.component';

export const routes: Routes = [
    { path: '', redirectTo: 'basica', pathMatch: 'full' },
    {path: 'basica', component: CalculadoraBasicaComponent},
    {path: 'cientifica', component: CalculadoraCientificaComponent},
    {path: '*', redirectTo: "Error 404"}
];
