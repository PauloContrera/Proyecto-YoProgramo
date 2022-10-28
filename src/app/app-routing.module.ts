import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditarCursosComponent } from './components/cursos/editar-cursos/editar-cursos.component';
import { NuevoCursosComponent } from './components/cursos/nuevo-cursos/nuevo-cursos.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarHabilidadComponent } from './components/habilidades/editar-habilidad/editar-habilidad.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad/nueva-habilidad.component';
import {HomeComponent} from './components/home/home.component'
import { EditarIdiomaComponent } from './components/idiomas/editar-idioma/editar-idioma.component';
import { NuevoIdiomaComponent } from './components/idiomas/nuevo-idioma/nuevo-idioma.component';
import { LoginComponent } from './components/login/login.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { NuevoProyectosComponent } from './components/proyectos/nuevo-proyectos/nuevo-proyectos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevaExperienciaComponent},
  { path: 'nuevaEducacion', component: NuevaEducacionComponent},
  { path: 'nuevaHabilidad', component: NuevaHabilidadComponent},
  { path: 'nuevoIdiomas', component: NuevoIdiomaComponent},
  { path: 'nuevoCurso', component: NuevoCursosComponent},
  { path: 'nuevoProyecto', component: NuevoProyectosComponent},
  { path: 'editexp/:id', component: EditarExperienciaComponent},
  { path: 'editarEducacion/:id', component: EditarEducacionComponent},
  { path: 'editarHabilidad/:id', component: EditarHabilidadComponent},
  { path: 'editarIdioma/:id', component: EditarIdiomaComponent},
  { path: 'editarCursos/:id', component: EditarCursosComponent},
  { path: 'editarProyecto/:id', component: EditarProyectosComponent},
  { path: 'ediAcerca/:id', component: EditarAcercaDeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
