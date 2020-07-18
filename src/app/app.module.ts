import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactMeModalComponent } from './shared/components/contact-me-modal/contact-me-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactMeModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
