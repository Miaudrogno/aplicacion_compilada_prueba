import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {

  public nombre: string="Goku";
  public edad: number=35;

public getNombreCapitalizado(): string{
  return this.nombre=this.nombre.toUpperCase();
}

public getDescripcionHeroe(): string{
  return `Descripcion: ${this.nombre}-${this.edad}`
}

public getNombrePrivado(): string{
  return 'Kakarot';
}

public cambiarNombre(): void{
  this.nombre="Goku: SuperSayan God"
}

public cambiarEdad(): void {
  this.edad=32;
}

public reestablecerValores(): void{
  this.nombre="GOKU";
  this.edad=35;
}

}
