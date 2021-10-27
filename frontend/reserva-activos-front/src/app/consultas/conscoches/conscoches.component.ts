import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/reservas/models/coche';
import { CocheImpl } from 'src/app/reservas/models/coche-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-conscoches',
  templateUrl: './conscoches.component.html',
  styles: []
})
export class ConscochesComponent implements OnInit {

  public coches: Coche[] = [];
  public coche: Coche = new CocheImpl;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaService.getCoches().subscribe(response => 
      this.coches= this.reservaService.mapearCoches(response));
           
      console.log(this.coches); 
  }

}
