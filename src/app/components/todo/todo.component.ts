import { Component, OnInit } from '@angular/core';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {



  userValue = '';
  toDoList: string[] = [];

  typesOfShoes: string[] = ['Contactar con el grupo 4 de encuestados para ver si respondieron o no.', 'Hacer seguimiento del grupo 5', 'Recoger resultados del grupo 1 de encuestados', 'Enviar las encuestas que faltan', 'Contactar con equipo para feedback'];

  days: string[] = ['Lunes 28 de septiembre', 'Martes 29 de septiembre', 'Miércoles 30 de septiembre', 'Jueves 01 de octubre', 'Viernes 02 de octubre'];

  constructor() { }

  ngOnInit(): void {}

  addTodo() {
   this.toDoList.push(this.userValue);
  }

}
