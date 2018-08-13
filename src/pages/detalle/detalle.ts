import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NoticiasService } from '../../services/noticias.services';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  id = null;
  noticia:any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,   private NoticiasService: NoticiasService) {

    this.id = navParams.get('id');
  if(this.id !=0){
    //this.noticia = NoticiasService.getNoticia(this.id);
    NoticiasService.getNoticia(this.id).valueChanges().subscribe(
      (noticia)=>{this.noticia=noticia},
      (error)=> console.log("problema :", error)
    );
  }else{
    this.noticia = {id:'', resumen:"", descripcion:""};
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  guardarNoticia(){
    this.noticia.id = Date.now();
    this.NoticiasService.store(this.noticia);
    this.noticia = {id:"", resumen:"", descripcion:""};
    alert('se guardo');
    this.navCtrl.push(HomePage);
  }

}
