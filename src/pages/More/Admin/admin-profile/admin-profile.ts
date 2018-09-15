import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {

  ownerKey = this.navParams.get("Okey");
  adminRef = firebase.database().ref("Partners").child(this.ownerKey);
  admin : Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getAdmin();
  }

getAdmin(){
  this.adminRef.once('value',ownerSnap=>{
    this.admin = ownerSnap.val();
  })
}
}
