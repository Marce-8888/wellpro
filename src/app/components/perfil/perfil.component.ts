import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  info: any;
  infoChat: Array<{}> = [
    {
      "img":"../../../assets/IMG/Perfil/1.png",
      "name":"Top Reasercher",
      "icon":"../../../assets/IMG/Home/Tiempo.png",
    },
    {
      "img":"../../../assets/IMG/Perfil/2.png",
      "name":"Survey Woman",
    },
    {
      "img":"../../../assets/IMG/Perfil/3.png",
      "name":"Almendra poderosa",
      "num": 3
    },
    {
      "img":"../../../assets/IMG/Perfil/4.png",
      "name":"Pepe investigador",
      "num": 2
    },
    {
      "img":"../../../assets/IMG/Perfil/5.png",
      "name":"Power Rasercher",
      "num": 4
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
