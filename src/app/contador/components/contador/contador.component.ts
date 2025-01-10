import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
  standalone: false, //Porque usamos ng module.
})

export class ContadorComponent implements OnInit {

  private initContador: number = 10;
  public title: string='Mi proyecto';
  public contador: number = this.initContador;

  incrementarPor(valor: number): void {
    this.contador=this.contador+valor;
  }

  decrementarPor(valor: number): void{
    this.contador=this.contador-valor
  }

  resetContador(): void{
    this.contador = this.initContador;
  }

  constructor() { }

  ngOnInit() { }
}
