import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AulaImpl } from 'src/app/reservas/models/aula-impl';
import { CocheImpl } from 'src/app/reservas/models/coche-impl';
import { ReservaImpl } from 'src/app/reservas/models/reserva-impl';
import { UsuarioImpl } from 'src/app/reservas/models/usuario-impl';
import { ReservaService } from 'src/app/reservas/service/reserva.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conseditoreserva',
  templateUrl: './conseditoreserva.component.html',
  styles: []
})
export class ConseditoreservaComponent implements OnInit {public reserva: ReservaImpl;
  public usuario: UsuarioImpl;
  public usuario2: UsuarioImpl;
  public coche: CocheImpl;
  public coche2: CocheImpl;
  public fechaCorrecta: boolean = true;
  public reservaEditada : ReservaImpl = new ReservaImpl();

  constructor(private reservaService: ReservaService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      console.log(id)
      if (id) {
          this.reservaEditada.id = id;
          this.reservaService.getReservaId(id).subscribe(response => 
          this.reserva= response);

          this.reservaService.getUsuarioReservaId(id).subscribe(response => 
            this.usuario= response);

          this.reservaService.getCocheReservaId(id).subscribe(reserva => 
            this.coche = reserva);
            
          }
        })
  }
  onCambio(){

    console.log (this.reserva);
    
    this.usuario2= this.reservaService.getIdUsuarioReservaId(this.usuario)
    console.log(this.usuario2)
    this.coche2= this.reservaService.getIdCocheReservaId(this.coche);
    console.log(this.coche2);
    this.reservaEditada.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
    this.reservaEditada.fechaFin = moment.utc(this.reserva.fechaFin).format();
    this.reservaEditada.activo = `${environment.hostControladores}coches/${this.coche2.id}`; 
    this.reservaEditada.usuario = `${environment.hostControladores}usuario/${this.usuario2.id}`;
    console.log(this.reservaEditada)
    this.reservaService.putReserva(this.reservaEditada).subscribe((response) =>console.log(response));

  }

  borrar() {
    console.log(this.reserva.id)
    this.reservaService.borrar(this.reservaEditada.id).subscribe(response => console.log(this.reserva));
   
  }

}
