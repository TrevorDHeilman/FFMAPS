import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stocks/stock/stock.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockService } from './stocks/stock.service';
import { ItemComponent } from './stocks/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePortalComponent,
    HomeComponent,
    NavbarComponent,
    OwnerDashboardComponent,
    LoginComponent,
    StockComponent,
    StockListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
