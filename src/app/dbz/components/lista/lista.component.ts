
import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { CommonModule } from '@angular/common';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'

})
export class ListaComponent {

 @Input('miLista')
  public listaPersonajes: Personaje[]=[{
    nombre: 'Trunks-Solitario',
    fuerza: 7000,
    id:uuid()
  }];

//Ponemos el decorador OutPut porque van a ser parametros de salida, que luego van a ser manejados por los metodos.
  @Output()
// Creamos un objeto deel tipo EventEmiiter que va a recibir un parametro, numero, que luego se va a emitir.
  // public onBorrarPersonaje: EventEmitter<number>=new EventEmitter();
  public onBorrarPersonaje: EventEmitter<string>=new EventEmitter();



// Nuestro metodo getIndiceLista va a recibir el slot del array, y gracias al emiter onBorrarMensaje va a ser emitido para
// lo usemos luego en nuestra component.


  // public getIndiceLista2(indice: number): void{
  //   this.onBorrarPersonaje.emit(indice)
  // }

  public getIndiceLista(indice: string): void{
    this.onBorrarPersonaje.emit(indice)
  }
}

