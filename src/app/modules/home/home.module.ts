import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';
import { FooterComponent } from 'app/@core/footer/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentRoutingModule,
  ],
  declarations: [
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
  ],
})
export class HomeModule { }
