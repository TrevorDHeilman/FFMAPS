import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    EmployeePortalComponent,
    HomeComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
