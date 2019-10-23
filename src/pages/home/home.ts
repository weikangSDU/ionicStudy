import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';//引入页面

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goLoginPage(){
    //this.navCtrl.push(LoginPage);//路由跳转-前进-不带参数
    this.navCtrl.push(LoginPage,{
      name:'wk',
      age:'23'
    })
  }

}
