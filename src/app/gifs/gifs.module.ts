import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './component/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
