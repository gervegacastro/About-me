import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    NavbarComponent,
    ProyectosComponent,
    TecnologiasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
