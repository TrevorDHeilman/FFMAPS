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
import { PlaceableComponent } from './placeable/placeable.component';
import { PlaceableListComponent } from './placeable-list/placeable-list.component';
import { PlaceableService } from './placeable.service';
import { StockComponent } from './stocks/stock/stock.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockService } from './stocks/stock.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeePortalComponent,
    HomeComponent,
    NavbarComponent,
    OwnerDashboardComponent,
    LoginComponent,
    PlaceableComponent,
    PlaceableListComponent,
    StockComponent,
    StockListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [UserService, PlaceableService, StockService],

  bootstrap: [AppComponent]
})
export class AppModule { }
