import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;
  infoRules: Array<{}> = [
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

  infoPrize: Array<{}> = [
    {
      "img":"5.000 wellys",
      "text":"Para cada integrante del grupo que termine el jueves, y el día viernes libre"
    },
    {
      "img":"3.000 wellys",
      "text":"Responder las estrategias que usaste en el chech out"
    }
  ]


  infoTeam: Array<{}> = [
    {
      "img":"1",
      "name":"Super Reasercher",
      "text":"Líder"
    },
    {
      "img":"2",
      "name":"Tú",
      "text":"Tarea: Encuestar a usuario de avión"
    },
    {
      "img":"3",
      "name":"Almendra poderosa",
      "text":"Tarea: Encuestar a usuario de metro"
    },
    {
      "img":"4",
      "name":"Power Reasercher",
      "text":"Tarea: Encuestar a usuario de buses"
    },
    {
      "img":"5",
      "name":"Survey Woman",
      "text":"Tarea: Encuestar a usuario de bicicletas"
    },
    {
      "img":"6",
      "name":"Pepe el investigador",
      "text":"Tarea: Encuestar a usuario de automóvil"
    },
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
