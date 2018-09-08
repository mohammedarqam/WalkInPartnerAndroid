import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampaignListPage } from './campaign-list';

@NgModule({
  declarations: [
    CampaignListPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignListPage),
  ],
})
export class CampaignListPageModule {}
