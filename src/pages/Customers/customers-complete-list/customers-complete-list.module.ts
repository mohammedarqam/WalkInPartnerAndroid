import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomersCompleteListPage } from './customers-complete-list';

@NgModule({
  declarations: [
    CustomersCompleteListPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomersCompleteListPage),
  ],
})
export class CustomersCompleteListPageModule {}
