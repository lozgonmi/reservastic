import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaulaComponent } from './caulas/caula/caula.component';
import { CaulaeditarComponent } from './caulas/caulaeditar/caulaeditar.component';
import { CaulasComponent } from './caulas/caulas.component';
import { ConseditoreservaComponent } from './conscoches/conscoche/cons/conseditoreserva/conseditoreserva.component';
import { ConscocheComponent } from './conscoches/conscoche/conscoche.component';
import { ConscochesComponent } from './conscoches/conscoches.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [
  
  {
    path: '',
    component: CaulasComponent
  },
  {
    path: 'coches',
    component: ConscochesComponent
  },
  {
    path: 'reservaula/:id',
    component: CaulaComponent
  },
  {
    path: 'reservacoche/:id',
    component: ConscocheComponent
  },
  {
    path: 'editarcoche/:id',
    component: ConseditoreservaComponent
  },
  {
    path: 'editar/:id',
    component: CaulaeditarComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
