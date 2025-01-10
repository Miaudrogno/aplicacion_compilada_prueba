import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { ListaComponent } from '../components/lista/lista.component';
import { AddPersonajeComponent } from "../components/add-personaje/add-personaje.component";
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: true,
  imports: [ListaComponent, AddPersonajeComponent],
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

// El servicio siempre tiene que ser privado, aunque lo hemos tenido publico anteriormente. Se inyecta como privado a la clase que hay ahi.
  constructor(private dbzService: DbzService){}

    // Hay que definir getter y setter para poder ser llamado.

  get personajes(): Personaje []{
    return this.dbzService.personajes;
  }

  servicioOnDeletePersonaje (id: string): void{
    this.dbzService.eliminarPersonaje(id);
  }

  servicioOnNewPersonaje (personaje: Personaje): void{
    this.dbzService.pushearPersonaje(personaje);
  }


  // public personajes: Personaje[]=[{
  //   nombre: 'Krilin',
  //   fuerza: 500
  // },{
  //   nombre: 'Goku',
  //   fuerza: 10000
  // },{
  //   nombre: 'Trunks',
  //   fuerza: 7000
  // },{
  //   nombre: 'Celula',
  //   fuerza: 11000
  // },{
  //   nombre: 'Radix',
  //   fuerza: 3000
  // }];


  // // Este metodo añade el personaje al array "personajes". Para la obtencion el personaje
  // // hace uso del onNewPersonaje (que lo usa en la add-personaje.component.html) y asi captura el personaje.
  // public pushearPersonaje (personaje: Personaje): void{
  //   // console.log('MainPage');
  //   // console.log(personaje)
  //   this.personajes.push(personaje);
  // }

  // // Este metodo eliminar un personaje del array personajes. Para ello emplea slice (indice, 1)
  // // que lo elimina. Para obtener el indice del arrray, lo captura con un metodo y lo emite con un evento onBorrarPersonaje.
  // // Para que funcione el eventEmiter, la llamada a la component en el main-page.html debe llamar al evento.

  // public eliminarPersonaje (indiceLista: number): void{
  //   const personajeEliminado = this.personajes[indiceLista];
  //   this.personajes.splice(indiceLista,1);

  //   console.log(personajeEliminado)
  // }






}
