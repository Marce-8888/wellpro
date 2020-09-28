import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inf: any;
  info: Array<{}> = [
    {
      "img":1,
      "text":"Realizar la tarea dentro del horario de trabajo"
    },
    {
      "img":2,
      "text":"Responder las estrategias que usaste en el chech out"
    },
    {
      "img":3,
      "text":"Mantener una conducta de autocuidado"
    },
    {
      "img":4,
      "text":"Para ganar el premio, deben completar el desafío dentro del tiempo. Sino, igualmente deben completar la tarea, pero no habrá premio."
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
