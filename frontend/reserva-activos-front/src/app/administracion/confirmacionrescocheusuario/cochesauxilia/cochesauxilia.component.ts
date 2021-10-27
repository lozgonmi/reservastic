import { Component, Input, OnInit } from '@angular/core';
import { CocheImpl } from 'src/app/reservas/models/coche-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-cochesauxilia',
  templateUrl: './cochesauxilia.component.html',
  styles: []
})
export class CochesauxiliaComponent implements OnInit {
  @Input() coche: CocheImpl;
  @Input() id: number;
  reservas : Reserva [] = [];

  constructor(private  reservaService: ReservaService) { }

  ngOnInit() {
    console.log(this.coche.id)
   this.reservaService.getReservasCocheActivo(this.coche.id).subscribe(response =>
    this.reservas = (this.reservaService.mapearReservasActivo(response)));
    this.reservas = this.reservas.filter(r=> r.reservaAprobada===false);
  }

}
