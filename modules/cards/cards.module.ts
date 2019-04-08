import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CardsHomeComponent } from './cards-home/cards-home.component';
import { CardslistComponent } from './cardslist/cardslist.component';
import { CardslistHomeComponent } from './cardslist/cardslist-home/cardslist-home.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';

@NgModule({
  declarations: [CardsComponent, CardsHomeComponent, CardslistComponent, CardslistHomeComponent, CardsDetailComponent],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
