import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SearchDeptComponent } from './search-dept/search-dept.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    SearchDeptComponent,
    ViewDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
