import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FoodComponent } from './pages/food/food.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TeamComponent } from './pages/team/team.component';
import { UnLoginGuard } from './un-login.guard';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent, canActivate:[LoginGuard]},
  {path:'food', component:FoodComponent, canActivate:[LoginGuard]},
  {path:'team', component:TeamComponent, canActivate:[LoginGuard]},
  {path:'order-list', component:OrderListComponent, canActivate:[LoginGuard]},
  {path:'setting', component:SettingComponent, canActivate:[LoginGuard]},
  {path:'feedback', component:FeedbackComponent, canActivate:[LoginGuard]},
  {path:'analytics', component:AnalyticsComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent, canActivate:[UnLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
