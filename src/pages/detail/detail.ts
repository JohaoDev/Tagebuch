import { Note } from './../../models/note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  note = new Note();
  id = null;
  show = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
    this.id = navParams.get('id');
    if(this.id != 0){
      //this.note = notesService.getNote(this.id);
      notesService.getNote(this.id)
        .valueChanges().subscribe( nota => {
          this.note = nota as Note;
        });
    }
  }

  ionViewDidLoad() {
  }

  addNote(){
    if(this.id != 0){
      this.notesService.editNote(this.note);

    }else{
      let fecha = new Date().toLocaleString();  // 2018/8/14 11:14:58
      let re = /\ /gi;
      let codigo = fecha.replace(re, "");       // 2018/8/1411:14:58
      let re2 = /\//gi;
      codigo = codigo.replace(re2, "");         // 201881411:14:58
      let re3 = /\:/gi;
      codigo = codigo.replace(re3, "");         // 2018814111458
      this.note.id = codigo;
      this.notesService.createNote(this.note);
    }
    this.navCtrl.pop();
  }

  deleteNote(){
    this.show =false;
    this.notesService.deleteNote(this.note);
    this.navCtrl.pop();
  }
}
