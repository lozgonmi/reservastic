import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Coche } from '../models/coche';
import { ReservaImpl } from '../models/reserva-impl';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styles: []
})
export class CochesComponent implements OnInit {
  cocheVerDatos: Coche;
  public coches: Coche[] = [];
  public coche: Coche;
  public usuarios: Usuario[] = [];
  public reserva : ReservaImpl = new ReservaImpl();
  public usuario : UsuarioImpl = new UsuarioImpl();

constructor(private reservaService: ReservaService) { }

ngOnInit() {
  console.log("hola")
  this.reservaService.getUsuarios().subscribe(response => 
  this.usuarios= this.reservaService.mapearUsuarios(response));   
  this.reservaService.getCoches().subscribe(response =>
  this.coches = this.reservaService.mapearCoches(response));
}

verDatos(coche: Coche): void {
  this.cocheVerDatos = coche;
}
onCambio(){
    
      this.reserva.fechaInicio = moment.utc(this.reserva.fechaInicio).format();
      this.reserva.fechaFin = moment.utc(this.reserva.fechaFin).format();
      this.reserva.activo = `${environment.hostControladores}coches/${this.cocheVerDatos.id}`; 
      this.reserva.usuario = `${environment.hostControladores}usuario/${this.usuario.id}`
      this.reservaService.postReserva(this.reserva).subscribe((response) =>console.log(response));
  
}

}
