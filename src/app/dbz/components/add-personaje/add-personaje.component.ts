import { Component, EventEmitter, Output} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { FormsModule } from '@angular/forms';
import {v4 as uuid} from 'uuid';



@Component({
  selector: 'dbz-add-personaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();

  public personaje: Personaje ={
    nombre: '',
    fuerza: 0,
    id: uuid(),
  };

// Este metodo va a llamar al evento onNewPersonaje. Se va a usar para emitir
// un personaje y luego meterlo en el array de personajes.
// En este metodo podriamos tambien llamar al uuid, pero no se controla aqui la informacion.
  public addPersonaje(): void{
    console.log(this.personaje);
    if (this.personaje.nombre.length==0) return;

    // Nuestro emite llamado onNewPersonaje va a emitir el objeto personaje
    this.onNewPersonaje.emit(this.personaje);

    // Inicializamos los valores una vez añadido el personaje
    this.personaje={
      nombre: '',
      fuerza: 0,
      id: ''


    }
    // this.personaje.nombre='';
    // this.personaje.fuerza=0;
  }
}
