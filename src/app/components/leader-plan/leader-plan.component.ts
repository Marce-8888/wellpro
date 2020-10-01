import { Component, OnInit } from '@angular/core';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-leader-plan',
  templateUrl: './leader-plan.component.html',
  styleUrls: ['./leader-plan.component.css']
})
export class LeaderPlanComponent implements OnInit {

  panelOpenState = false;
  userValue: string = "";
  toDoList: string[] = [];
  // toDoList: Array<string> = [];

  typesOfShoes: string[] = ['Contactar con el grupo 4 de encuestados para ver si respondieron o no.', 'Hacer seguimiento del grupo 5', 'Recoger resultados del grupo 1 de encuestados', 'Enviar las encuestas que faltan', 'Contactar con equipo para feedback'];

  days: string[] = ['Lunes 28 de septiembre', 'Martes 29 de septiembre', 'Miércoles 30 de septiembre', 'Jueves 01 de octubre', 'Viernes 02 de octubre'];

  constructor() { }

  ngOnInit(): void {}

  addTodo() {
   this.toDoList.push(this.userValue);
  }

  // toggle(event){
  //   console.log(event.source.value, 'holi');
  // }

}
