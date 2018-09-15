import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-store-profile',
  templateUrl: 'store-profile.html',
})
export class StoreProfilePage {

  sid = firebase.auth().currentUser.uid;
  storeRef = firebase.database().ref("Restaurant Data/Restaurants").child(this.sid);
  store : Array<any> = [];
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getStore();
  }

  getStore(){ 
    this.storeRef.once('value',storeSnap=>{
      this.store = storeSnap.val();
    })
  }


}
