import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { PurchaseService} from './services/purchase.service';
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
import { ScheduleListComponent } from './schedules/schedule-list/schedule-list.component';
import { ScheduleViewComponent } from './schedules/schedule-view/schedule-view.component';
import { AttendantComponent } from './attendants/attendant/attendant.component';
import { AttendantListComponent } from './attendants/attendant-list/attendant-list.component';
import { ScheduleService } from './schedules/schedule.service';
import { AttendantService } from './attendants/attendant.service';
import { ReceiptService } from './services/receipt.service';
import { PlaceableAddComponent } from './placeable-add/placeable-add.component';
import { PlaceableTypeService } from './placeable-type.service';
import { AttendantViewComponent } from './attendants/attendant-view/attendant-view.component';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import { DialogOverviewPurchaseComponent } from './dialog-overview-purchase/dialog-overview-purchase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PendingClientViewComponent } from './pending-client-view/pending-client-view.component';
import { DraglayoutComponent } from './draglayout/draglayout.component';
import { DialogOverviewSearchReceiptComponent } from './dialog-overview-search-receipt/dialog-overview-search-receipt.component';
import {SalesComponent} from './sales/sales.component';

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
    ScheduleComponent,
    ScheduleListComponent,
    ReceiptComponent,
    ScheduleComponent,
    ScheduleViewComponent,
    AttendantComponent,
    AttendantListComponent,
    EventComponent,
    EventListComponent,
    PlaceableAddComponent,
    DragDropEventComponent,
    AttendantViewComponent,
    EventListComponent,
    DialogOverviewPurchaseComponent,
    AboutUsComponent,
    PendingClientViewComponent,
    DraglayoutComponent,
    DialogOverviewSearchReceiptComponent,
    SalesComponent,
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
    MatDialogModule,
    MatFormFieldModule,
  ],

  providers: [
    UserService,
    PurchaseService,
    UserService,
    PlaceableService,
    StockService,
    ReceiptService,
    ScheduleService,
    AttendantService,
    EventService,
    PlaceableTypeService,
    DialogOverviewPurchaseComponent,
  ],

  bootstrap: [AppComponent],
  entryComponents: [
    PurchaseComponent,
    DialogOverviewPurchaseComponent,
    DialogOverviewSearchReceiptComponent,
  ],
})
export class AppModule { }
