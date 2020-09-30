import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  showModal:boolean=false;

  info: any;
  infoChat: Array<{}> = [
    {
      img:'../../../assets/IMG/Perfil/1.png',
      name:"Top Researcher",
      icon:'../../../assets/IMG/Perfil/pin.png',
    },
    {
      img:'../../../assets/IMG/Perfil/2.png',
      name:"Survey Woman",
    },
    {
      img:'../../../assets/IMG/Perfil/3.png',
      name:"Almendra poderosa",
      icon:'../../../assets/IMG/Perfil/g3.png'
    },
    {
      img:'../../../assets/IMG/Perfil/4.png',
      name:"Pepe investigador",
      icon:'../../../assets/IMG/Perfil/g2.png'
    },
    {
      img:'../../../assets/IMG/Perfil/5.png',
      name:"Power Researcher",
      icon:'../../../assets/IMG/Perfil/g4.png'
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }
}
