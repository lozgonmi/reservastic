import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coche } from '../../models/coche';
import { CocheImpl } from '../../models/coche-impl';
import { ReservaService } from '../../service/reserva.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styles: []
})
export class CocheComponent implements OnInit {
  @Input() coche: CocheImpl;
  @Output() cocheSeleccionado = new EventEmitter<Coche>();
  fechaInicio : string;
  fechaFin : string;
  //id : number;
  
 // public usuario : Usuario;
  public coches : Coche[] =[];
  public cochedos : Coche;
 

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
  }

}
