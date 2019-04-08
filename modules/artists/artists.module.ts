import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsdetailComponent } from './artistsdetail/artistsdetail.component';
import { ArtistslistComponent } from './artistslist/artistslist.component';

@NgModule({
  declarations: [ArtistsdetailComponent, ArtistslistComponent],
  imports: [
    CommonModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
