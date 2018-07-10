import { Injectable } from '@angular/core';

@Injectable()
export class NotesService{
    notes = [
        {id:1, title:'Nota 1', descripcion:'Descripcion Nota 1'},
        {id:2, title:'Nota 2', descripcion:'Descripcion Nota 2'},
        {id:3, title:'Nota 3', descripcion:'Descripcion Nota 3'}
    ];

    public getNotes(){
        return this.notes;
    }

    public getNote(id){
        return this.notes.filter(function(e, i){ return e.id == id })[0] ││ {id:null, title:null, description:null};
    }
}