import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaulasComponent } from './caulas/caulas.component';
import { CaulaComponent } from './caulas/caula/caula.component';
import { ReservaService } from '../reservas/service/reserva.service';

import { CaulappComponent } from './caulas/caulapp/caulapp.component';
import { CaulaeditarComponent } from './caulas/caulaeditar/caulaeditar.component';
import { ConscochesComponent } from './conscoches/conscoches.component';
import { ConscocheComponent } from './conscoches/conscoche/conscoche.component';
import { ConsComponent } from './conscoches/conscoche/cons/cons.component';
import { ConseditoreservaComponent } from './conscoches/conscoche/cons/conseditoreserva/conseditoreserva.component';



@NgModule({
  declarations: [ConsultasComponent, CaulasComponent, CaulaComponent,  CaulappComponent, CaulaeditarComponent, ConscochesComponent, ConscocheComponent, ConsComponent, ConseditoreservaComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [ReservaService]
})
export class ConsultasModule { }
