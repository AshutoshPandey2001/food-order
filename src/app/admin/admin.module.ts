import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FoodComponent } from './pages/food/food.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { TeamComponent } from './pages/team/team.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SettingComponent } from './pages/setting/setting.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FoodComponent,
    NavbarComponent,
    FooterComponent,
    OrderListComponent,
    TeamComponent,
    FeedbackComponent,
    SettingComponent,
    AnalyticsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
