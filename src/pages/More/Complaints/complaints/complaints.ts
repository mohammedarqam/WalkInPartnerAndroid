import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {

  constructor(
  public navCtrl: NavController, 
  public alertCtrl : AlertController,
  public navParams: NavParams,
  public toastCtrl : ToastController,
  ) {
  }

  addComplaint() {
  let alert = this.alertCtrl.create({
    title: 'Contact',
    message: 'Give a name to your concern',
    enableBackdropDismiss : false,
    inputs: [
      {
        name: 'title',
        placeholder: 'Name'
      },
      {
        name: 'sub',
        placeholder: 'Subject',
        type: 'text'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Send',
        handler: data => {
          if(data.title){
            this.sendComplaint(data.title,data.sub);
          }else{
            this.presentToast("Mention a Title")
          }
        }
      }
    ]
  });
  alert.present();
}

sendComplaint(title,sub){
  console.log(title);
  console.log(sub);
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
