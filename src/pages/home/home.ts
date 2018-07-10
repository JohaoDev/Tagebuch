import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [
    {id:1, title:'Nota 1', descripcion:'Descripcion Nota 1'}
    {id:1, title:'Nota 2', descripcion:'Descripcion Nota 2'}
    {id:1, title:'Nota 3', descripcion:'Descripcion Nota 3'}

  ]
  constructor(public navCtrl: NavController) {

  }

}