import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MinasComponent } from './minas/minas.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'minas', component: MinasComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
