import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosComponent } from './components/logos/logos.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditarCursosComponent } from './components/cursos/editar-cursos/editar-cursos.component';
import { NuevoCursosComponent } from './components/cursos/nuevo-cursos/nuevo-cursos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { SwiperModule } from 'swiper/angular';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './components/habilidades/editar-habilidad/editar-habilidad.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { NuevoIdiomaComponent } from './components/idiomas/nuevo-idioma/nuevo-idioma.component';
import { EditarIdiomaComponent } from './components/idiomas/editar-idioma/editar-idioma.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { NuevoProyectosComponent } from './components/proyectos/nuevo-proyectos/nuevo-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    HeaderComponent,
    LogosComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    EditarAcercaDeComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    CursosComponent,
    EditarCursosComponent,
    NuevoCursosComponent,
    HabilidadesComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    IdiomasComponent,
    NuevoIdiomaComponent,
    EditarIdiomaComponent,
    ProyectosComponent,
    EditarProyectosComponent,
    NuevoProyectosComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    NgCircleProgressModule.forRoot({}),


  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
