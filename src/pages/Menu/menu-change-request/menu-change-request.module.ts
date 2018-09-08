import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuChangeRequestPage } from './menu-change-request';

@NgModule({
  declarations: [
    MenuChangeRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuChangeRequestPage),
  ],
})
export class MenuChangeRequestPageModule {}
