import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  notes = [];
    constructor(public navCtrl: NavController, public notesService: NotesService) {
      this.notes = notesService.getNotes();

  }

}