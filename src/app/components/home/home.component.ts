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
      "img":"../../../assets/IMG/Home/Tiempo.png",
      "text":"Realizar la tarea dentro del horario de trabajo"
    },
    {
      "img":"../../../assets/IMG/Home/Fecha.png",
      "text":"Responder las estrategias que usaste en el chech out"
    },
    {
      "img":"../../../assets/IMG/Home/Corazon.png",
      "text":"Mantener una conducta de autocuidado"
    },
    {
      "img":"../../../assets/IMG/Home/sad.png",
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
      "img":"../../../assets/IMG/Home/team1.png",
      "name":"Super Reasercher",
      "text":"Líder",
      "num":"45%",
      "progress":45
    },
    {
      "img":"../../../assets/IMG/Home/team2.png",
      "name":"Tú",
      "text":"Tarea: Encuestar a usuario de avión",
      "num":"45%",
      "progress":60
    },
    {
      "img":"../../../assets/IMG/Home/team3.png",
      "name":"Almendra poderosa",
      "text":"Tarea: Encuestar a usuario de metro",
      "num":"45%",
      "progress":40
    },
    {
      "img":"../../../assets/IMG/Home/team4.png",
      "name":"Power Reasercher",
      "text":"Tarea: Encuestar a usuario de buses",
      "num":"45%",
      "progress":90
    },
    {
      "img":"../../../assets/IMG/Home/team5.png",
      "name":"Survey Woman",
      "text":"Tarea: Encuestar a usuario de bicicletas",
      "num":"45%",
      "progress": 65
    },
    {
      "img":"../../../assets/IMG/Home/team6.png",
      "name":"Pepe el investigador",
      "text":"Tarea: Encuestar a usuario de automóvil",
      "num":"45%",
      "progress":85
    },
  ]



  // width:any;

  constructor() { }

  ngOnInit(): void {

    // this.width! = 25;
  }

}
