import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheImpl } from 'src/app/reservas/models/coche-impl';
import { Reserva } from 'src/app/reservas/models/reserva';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';

@Component({
  selector: 'app-conscoche',
  templateUrl: './conscoche.component.html',
  styles: []
})
export class ConscocheComponent implements OnInit {
  @Input() coche: CocheImpl;
  reservas: Reserva[]=[];
  
  public usuario : UsuarioImpl = new UsuarioImpl();
  
  reserva: Reserva;

  constructor(private reservaService: ReservaService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.coche)
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      if (id) {
    this.reservaService.getReservasCocheActivo(id).subscribe(response => 
      this.reservas= this.reservaService.mapearReservasActivo(response)); }});
     
  }

}
