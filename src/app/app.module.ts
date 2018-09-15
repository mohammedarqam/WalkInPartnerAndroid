import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/Utility/login/login';
import { TabsPage } from '../pages/Utility/tabs/tabs';
import { CustomersPage } from '../pages/Customers/customers/customers';
import { DashboardPage } from '../pages/Dashboard/dashboard/dashboard';
import { MenuPage } from '../pages/Menu/menu/menu';
import { OrdersPage } from '../pages/Orders/orders/orders';
import { MorePage } from '../pages/More/more/more';
import { CustomerDetailsPage } from '../pages/Customers/customer-details/customer-details';
import { CustomersCompleteListPage } from '../pages/Customers/customers-complete-list/customers-complete-list';
import { CampaignListPage } from '../pages/Dashboard/Campaigns/campaign-list/campaign-list';
import { CampaignReportsPage } from '../pages/Dashboard/Campaigns/campaign-reports/campaign-reports';
import { StartCampaignPage } from '../pages/Dashboard/Campaigns/start-campaign/start-campaign';
import { MenuAnalysisPage } from '../pages/Menu/menu-analysis/menu-analysis';
import { MenuChangeRequestPage } from '../pages/Menu/menu-change-request/menu-change-request';
import { OrderDetailsPage } from '../pages/Orders/order-details/order-details';
import { AdminProfilePage } from '../pages/More/Admin/admin-profile/admin-profile';
import { ComplaintDetailsPage } from '../pages/More/Complaints/complaint-details/complaint-details';
import { ComplaintsPage } from '../pages/More/Complaints/complaints/complaints';
import { StoreProfilePage } from '../pages/More/Store/store-profile/store-profile';
import { FaqsPage } from '../pages/More/faqs/faqs';


export const firebaseCred = {
  apiKey: "AIzaSyBrOwk3PvUtFXM_wxAW-OQ7leXTlDeLSkk",
  authDomain: "walkin-2215d.firebaseapp.com",
  databaseURL: "https://walkin-2215d.firebaseio.com",
  projectId: "walkin-2215d",
  storageBucket: "walkin-2215d.appspot.com",
  messagingSenderId: "946109608266"
};
  firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    CustomersPage,
    DashboardPage,
    MenuPage,
    OrdersPage,
    MorePage,
    CustomerDetailsPage,
    CustomersCompleteListPage,
    CampaignListPage,
    CampaignReportsPage,
    StartCampaignPage,
    MenuAnalysisPage,
    MenuChangeRequestPage,
    OrderDetailsPage,
    AdminProfilePage,
    ComplaintDetailsPage,
    ComplaintsPage,
    StoreProfilePage,
    FaqsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    CustomersPage,
    DashboardPage,
    MenuPage,
    OrdersPage,
    MorePage,
    CustomerDetailsPage,
    CustomersCompleteListPage,
    CampaignListPage,
    CampaignReportsPage,
    StartCampaignPage,
    MenuAnalysisPage,
    MenuChangeRequestPage,
    OrderDetailsPage,
    AdminProfilePage,
    ComplaintDetailsPage,
    ComplaintsPage,
    StoreProfilePage,
    FaqsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
