import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  sid = firebase.auth().currentUser.uid;
  restaurantRef = firebase.database().ref("Restaurant Data/Restaurants").child(this.sid);
  status : boolean;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    this.getStatus();
  }















  getStatus(){
    this.restaurantRef.child("Status").once('value',snap=>{
      this.status = snap.val();
    })
  }
  changeStatus(){
    this.restaurantRef.child("Status").set(this.status).then(()=>{
    });
  }


}
