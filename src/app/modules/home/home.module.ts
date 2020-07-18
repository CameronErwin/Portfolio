import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
