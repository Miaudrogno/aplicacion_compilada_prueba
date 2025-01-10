//Usamos un snipet, usamos el normal, no le http.

import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
// Importamos uuid para hacer un identificador unico. Luego creamos una propiedad (en interface)
// Vamos a usar la funcion v4
import {v4 as uuid} from 'uuid';

// Una clase que es inyectable tendremos que inyectarla.
// Nos traemos los datos del main-page

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes: Personaje[]=[{
    id: uuid(),
    nombre: 'Krilin',
    fuerza: 500
  },{
    id: uuid(),
    nombre: 'Goku',
    fuerza: 10000
  },{
    id: uuid(),
    nombre: 'Trunks',
    fuerza: 7000
  },{
    id: uuid(),
    nombre: 'Celula',
    fuerza: 11000
  },{
    id: uuid(),
    nombre: 'Radix',
    fuerza: 3000
  }];


  // Este metodo añade el personaje al array "personajes". Para la obtencion el personaje
  // hace uso del onNewPersonaje (que lo usa en la add-personaje.component.html) y asi captura el personaje.
  public pushearPersonaje2 (personaje: Personaje): void{
    // console.log('MainPage');
    // console.log(personaje)
    this.personajes.push(personaje);
  }

  public pushearPersonaje (personaje: Personaje): void{
    //const newPersonaje: Personaje = {...personaje}con los ... soltamos todas las propiedases del personaje


    const nuevoPersonaje: Personaje ={
      id:uuid(),
      nombre: personaje.nombre,
      fuerza: personaje.fuerza,
    }

    this.personajes.push(nuevoPersonaje);
  }

  // Este metodo eliminar un personaje del array personajes. Para ello emplea slice (indice, 1)
  // que lo elimina. Para obtener el indice del arrray, lo captura con un metodo y lo emite con un evento onBorrarPersonaje.
  // Para que funcione el eventEmiter, la llamada a la component en el main-page.html debe llamar al evento.

  public eliminarPersonaje2 (indiceLista: number): void{
    const personajeEliminado = this.personajes[indiceLista];
    this.personajes.splice(indiceLista,1);

    console.log(personajeEliminado)
  }

  // Este es el metodo que hemos añadido, que accede a nuestra lista llamad "personajes", y comprueba por cada personaje
  // que el ID no sea el que le hemos pasado.
  // crea de nuevo la lista sin ese personaje a nivel de renderizacion.
  public eliminarPersonaje(id: string): void {
    this.personajes=this.personajes.filter(personaje => personaje.id !==id);
  }



}
