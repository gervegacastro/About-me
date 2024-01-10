import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'sobre-mi'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
