import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  notes = [];
    constructor(public navCtrl: NavController, public notesService: NotesService) {
      this.notes = notesService.getNotes();
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id:id});
  }

}