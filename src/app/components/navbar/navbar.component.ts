import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showCheckout:boolean=false;

  info: any;
  infoCheckout: Array<{}> = [
    {
      text:'Me conecté temprano',
    },
    {
      text:'Planifiqué mi semana el día Lunes'
    },
    {
      text:'Fui planificando día a día'
    },
    {
      text:'Pedí ayuda a mis compañer@s'
    },
    {
      text:'Me concentré toda la jornada'
    },
    {
      text:'Respeté mis horarios de trabajo'
    },
    {
      text:'Hice pausas de descanso'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
