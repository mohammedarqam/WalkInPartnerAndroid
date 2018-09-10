import { Component } from '@angular/core';
import { Platform, Tabs, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/Utility/login/login';
import { TabsPage } from '../pages/Utility/tabs/tabs';
import * as firebase from 'firebase';
import { AdminProfilePage } from '../pages/More/Admin/admin-profile/admin-profile';
import { StoreProfilePage } from '../pages/More/Store/store-profile/store-profile';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
  platform: Platform, 
  public toastCtrl : ToastController,
  statusBar: StatusBar, 
  splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("Restaurants").child(user.uid).once('value',itemSnap=>{
            if(itemSnap.exists()){
              var welMsg = "Welcome"+" "+itemSnap.val().RestaurantName;
              this.rootPage = TabsPage;
              this.presentToast(welMsg);
              splashScreen.hide();
            }else{
              firebase.auth().signOut().then(()=>{
                this.rootPage = LoginPage;
                this.presentToast("You are not registered as our Partner")
                splashScreen.hide();
              })
            }
    });
      }
      else{
        this.rootPage = LoginPage;
        splashScreen.hide();
      }
    });  


      statusBar.styleDefault();
    });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      showCloseButton : true
    });
    toast.present();
  
  }
}
