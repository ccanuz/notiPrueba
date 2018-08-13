import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()

export class NoticiasService{
    noticias =[
        {id:1, resumen:"noticia 1", descripcion:"prueba desde ionic 4"},
        {id:2, resumen:"noticia 2", descripcion:"prueba desde ionic 4"},
        {id:3, resumen:"noticia 3", descripcion:"prueba desde ionic 4"},
    ];

    constructor(private afDB: AngularFireDatabase){

    }
    public getNoticias(){
        return this.afDB.list('/noticias');
    }
    
    public getNoticia(id){
    //return this.noticias.filter((noticia)=> {return noticia.id == id})[0];
    return this.afDB.object('/noticias/'+id);

    }

    public store(noticia){
        this.afDB.database.ref('noticias/'+noticia.id).set(noticia);
        return true;
    }

}

