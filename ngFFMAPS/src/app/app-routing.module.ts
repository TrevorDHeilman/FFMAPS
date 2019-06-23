import { ScheduleViewComponent } from './schedules/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import {PurchaseComponent} from './purchase/purchase.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { DragDropEventComponent } from './drag-drop-event/drag-drop-event.component';
import {ReceiptComponent} from './receipt/receipt.component';
import { AttendantViewComponent } from './attendants/attendant-view/attendant-view.component';
import {DialogOverviewPurchaseComponent} from './dialog-overview-purchase/dialog-overview-purchase.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PendingClientViewComponent } from './pending-client-view/pending-client-view.component';
import {SalesComponent} from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'portal',
    component: EmployeePortalComponent
  },
  {
    path:'portal/pending_clients',
    component: PendingClientViewComponent
  },
  {
    path: 'portal/timesheets',
    component: ScheduleViewComponent
  },
  {
    path: 'portal/attendanttimesheet',
    component: AttendantViewComponent
  },
  {
    path: 'portal/layout',
    component: OwnerDashboardComponent
  },
  {
    path: 'portal/inventory',
    component: StockListComponent
  },
  {
    path: 'home/purchase',
    component: PurchaseComponent
  },
  { //app-drag-drop-event
    path: 'drag',
    component: DragDropEventComponent
  },
  {
    path: 'home/receipt',
    component: ReceiptComponent
  },
  {
    path: 'home/dialog-overview-purchase',
    component: DialogOverviewPurchaseComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'portal/sales',
    component: SalesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
