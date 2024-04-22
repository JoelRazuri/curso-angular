import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  nombre?: string;
  fecha?: Date = new Date();
  
  // Primer forma para 'injectar' un componente, con el constructor
  constructor(private _servicioFamiliar: ServicioFamiliarService) {

  }

  // Otra forma es usando la palabra reservada 'inject'
  private _servicioFamiliar2 = inject(ServicioFamiliarService);
  // Hay que reemplazar '_servicioFamiliar' por '_servicioFamiliar2'

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || ``);
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }



  // mensajePadre = 'Mensaje desde el padre :D';

  // reciboMensaje: string = '';

  // recibirMensaje($event: string) {
  //   this.reciboMensaje = $event;
  // }
}
