import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public nombreHeroes: string[] = ['Goku', 'Piccolo', 'Vegeta', 'Gohan', 'Trunks'];
  public heroeEliminado?: string;

  public eliminaUltimoHeroe(): void{
    this.heroeEliminado=this.nombreHeroes.pop();
  }


}
