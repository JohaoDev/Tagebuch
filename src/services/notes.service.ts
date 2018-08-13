import { Note } from './../models/note';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class NotesService{
    constructor(public afDB: AngularFireDatabase){}
    notes = [];

    public getNotes(){
        return this.afDB.list('notas/');
        //return this.notes;
    }

    public getNote(id){
        return this.afDB.object('notas/'+id);
        //return this.notes.filter(function(e, i){ return e.id == id }) [0] || {id:null, title:null, description:null};
    }

    public createNote(note: Note){
        this.afDB.database.ref('notas/'+note.id).set(note);
        //this.notes.push(note);
    }

    public editNote(note: Note){
        /*for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }*/
        this.afDB.database.ref('notas/'+note.id).set(note);

    }

    public deleteNote(note: Note){
        /*for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i, 1);
            }
        }*/
        this.afDB.database.ref('notas/'+note.id).remove();
    }
}
