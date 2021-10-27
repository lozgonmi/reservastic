import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmoreservaComponent } from '../reservas/reservaulas/confirmoreserva/confirmoreserva.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ConfirmacionrescocheusuarioComponent } from './confirmacionrescocheusuario/confirmacionrescocheusuario.component';
import { ConfirmacionreservasusuarioComponent } from './confirmacionreservasusuario/confirmacionreservasusuario.component';



const routes: Routes = [
 
    {
      path:'',
      component: AdministradorComponent
      },
      {
        path: 'validoreserva/:id',
        component: ConfirmacionreservasusuarioComponent
      },
      {
        path: 'validoreservacoche/:id',
        component: ConfirmacionrescocheusuarioComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
