import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NoticiasService } from '../../services/noticias.services';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias:any = [];

  constructor(public navCtrl: NavController,  private NoticiasService: NoticiasService) {
    this.NoticiasService.getNoticias().valueChanges()
    .subscribe(
      (noticias)=>{this.noticias=noticias},
      (error)=> console.log("problema :", error));

  }

  verDetalleNoticia(id){
    this.navCtrl.push(DetallePage,{id: id});
  }
  
  crearNoticia(){
    this.navCtrl.push(DetallePage,{id: 0});
  }

}
