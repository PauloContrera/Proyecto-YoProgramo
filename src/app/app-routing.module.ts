import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import {HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevaExperienciaComponent},
  { path: 'editexp/:id', component: EditarExperienciaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
