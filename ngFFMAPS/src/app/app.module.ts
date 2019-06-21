import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';
/////////


import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {PurchaseService} from './services/purchase.service';
import { StockComponent } from './stocks/stock/stock.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockService } from './stocks/stock.service';
import { ItemComponent } from './stocks/item/item.component';
import { PlaceableComponent } from './placeable/placeable.component';
import { PlaceableListComponent } from './placeable-list/placeable-list.component';
import { PlaceableService } from './placeable.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event.service';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropEventComponent } from './drag-drop-event/drag-drop-event.component';
import { DemoMaterialModule } from './material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePortalComponent,
    HomeComponent,
    NavbarComponent,
    OwnerDashboardComponent,
    LoginComponent,
    PurchaseComponent,
    StockComponent,
    StockListComponent,
    ItemComponent,
    PlaceableComponent,
    PlaceableListComponent,
    ReceiptComponent,
    ScheduleComponent,
    EventComponent,
    EventListComponent,
    DragDropEventComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],

  providers: [
    UserService,
    PurchaseService,
    UserService,
    PlaceableService,
    StockService,
    EventService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }