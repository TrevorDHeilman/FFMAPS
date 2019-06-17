import { ScheduleViewComponent } from './schedules/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import {PurchaseComponent} from './purchase/purchase.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import {ReceiptComponent} from './receipt/receipt.component';

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
    path: 'portal/timesheets',
    component: ScheduleViewComponent
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
  {
    path: 'home/receipt',
    component: ReceiptComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
