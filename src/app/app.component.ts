import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PPLAB4';
  links : Array<any> = [
    {route:"/", alias:"Home"},
    {route:"/listado", alias:"Listar"},
    {route:"/detalle", alias:"Detalle"},
  ];
  activeLink = this.links[0].route;
}
