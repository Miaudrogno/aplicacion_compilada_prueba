import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ContadorComponent } from "./contador/components/contador/contador.component";
// import { HeroeComponent } from "./heroes/components/heroe/heroe.component";
// import { ListaComponent } from "./heroes/components/lista/lista.component";
import { ContadorModule } from './contador/components/contador.module';
import { HeroesModule } from './heroes/components/heroes.module';
import { MainPageComponent } from "./dbz/pages/main-page.component";
import { ListaComponent } from './dbz/components/lista/lista.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorModule, HeroesModule, MainPageComponent, MainPageComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//---------------------------------------------------------------------------------------------------
// Comienzo de la Clase
//---------------------------------------------------------------------------------------------------
export class AppComponent {
  public title = 'Mi Proyecto';
  public contador:number = 10;



incrementarPor(): void{
  this.contador = this.contador+1;
}

decrementarPor(): void{
  this.contador = this.contador-1;
}


}
