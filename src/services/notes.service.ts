import { Injectable } from '@angular/core';

@Injectable()
export class NotesService{
    constructor(){}
    notes = [
        {id:1, title:'Lista de compras', description:'arroz, azucar, leche, huevos, cereal, pollo'},
        {id:2, title:'Recordatorio', description:'Llevar a Bobby a la peluqueria'},
        {id:3, title:'Amigos', description:'Salir con mis amigos el 3 de agosto al parque Metropolitano'}
    ];

    public getNotes(){
        return this.notes;
    }

    public getNote(id){
        return this.notes.filter(function(e, i){ return e.id == id }) [0] || {id:null, title:null, description:null};
    }

    public createNote(note){
        this.notes.push(note);
    }

    public editNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }
    }

    public deleteNote(note){
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i, 1);
            }
        }
    }
}