import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  note = {id: null, title: null, description: null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
    this.id = navParams.get('id');
    if(this.id != 0){
      //this.note = notesService.getNote(this.id);
      notesService.getNote(this.id)
        .valueChanges().subscribe( note => {
          this.note = note;
        });
        console.log(this.note);
    }
  }

  ionViewDidLoad() {
  }

  addNote(){
    if(this.id != 0){
      this.notesService.editNote(this.note);
      
    }else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
  }
    this.navCtrl.pop();
  }

  deleteNote(){
    this.notesService.deleteNote(this.note);
      this.navCtrl.pop();
  }
}