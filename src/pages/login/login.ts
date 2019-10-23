import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:object={
    account:'admin',
    password:undefined,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //获取路由参数
    let name = this.navParams.get('name');
    let age = this.navParams.get('age');
    console.log(name,age)
  }

  login(){
    //设置某个页面为app的路由根页面，从此不能再后退页面
    this.navCtrl.setRoot(LoginPage)
  }
  goBack(){
    this.navCtrl.pop();//路由跳转-后退
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
