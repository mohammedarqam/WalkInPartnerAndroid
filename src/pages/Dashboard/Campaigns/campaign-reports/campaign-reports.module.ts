import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampaignReportsPage } from './campaign-reports';

@NgModule({
  declarations: [
    CampaignReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(CampaignReportsPage),
  ],
})
export class CampaignReportsPageModule {}
