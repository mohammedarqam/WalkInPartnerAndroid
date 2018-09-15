import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AdminProfilePage } from '../Admin/admin-profile/admin-profile';
import { StoreProfilePage } from '../Store/store-profile/store-profile';
import { ComplaintsPage } from '../Complaints/complaints/complaints';
import { FaqsPage } from '../faqs/faqs';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  storeRef = firebase.database().ref("Restaurant Data/Restaurants").child(firebase.auth().currentUser.uid);
  store : Array<any> = [];
  status : string;

  constructor(
  public navCtrl: NavController, 
  public alertCtrl : AlertController,
  public navParams: NavParams
  ) {
    this.getRestaurant();
  }


  getRestaurant(){
    this.storeRef.once('value',snap=>{
      this.store = snap.val();
      if(snap.val().Status){
        this.status = "Online";
      }else{
        this.status = "Offline";
      }
    })
  }

  signOutConfirm() {
    this.getRestaurant();
    let alert = this.alertCtrl.create({
      title: 'Do you wanna log out?',
      message: 'You will still be '+ this.status ,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.signOut();
          }
        }
      ]
    });
    alert.present();
  }
  

  viewAdmin(k){
    this.navCtrl.push(AdminProfilePage,{Okey : k} );
  }
  viewStore(){
    this.navCtrl.push(StoreProfilePage);
  }
  viewComplaints(){
    this.navCtrl.push(ComplaintsPage);
  }
  gtFaq(){
    this.navCtrl.push(FaqsPage);
  }



  signOut(){
    firebase.auth().signOut();
  }

}
