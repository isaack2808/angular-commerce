import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageArtistsComponent } from './manage-artists/manage-artists.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageArtistsComponent, ManageCardsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
