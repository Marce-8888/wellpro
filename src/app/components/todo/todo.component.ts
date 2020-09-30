import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  typesOfShoes: string[] = ['Contactar con el grupo 4 de encuestados para ver si respondieron o no.', 'Hacer seguimiento del grupo 5', 'Recoger resultados del grupo 1 de encuestados', 'Enviar las encuestas que faltan', 'Contactar con equipo para feedback'];

  constructor() { }

  ngOnInit(): void {
  }

}
