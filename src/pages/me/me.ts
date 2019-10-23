import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  numList:Array<number>=[1,2,3,4,5,6]
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController
     ) {
  }
  btnClick(num){
    //弹窗警告
    let alert = this.alertCtrl.create({
      title:'按钮被点击',
      subTitle:`你点击的数字是：${num}`,
      buttons:['朕知道了']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
