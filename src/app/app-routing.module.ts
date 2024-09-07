import {Injectable, NgModule} from '@angular/core';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';
import {AddEmployeComponent} from './addemploye/addemploye.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {utilisateurComponent} from './utilisateur/utilisateur.component';
import {LoginComponent} from './login/login.component';
import {UserStatutComponent,} from './usestatut/usestatut.component';
import {UserComponent} from "./user/user.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebaruserComponent} from "./sidebaruser/sidebaruser.component";
import {UsedashComponent} from "./usedash/usedash.component";


const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-employe', component: AddEmployeComponent},
  {path: 'utilisateur', component: utilisateurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sidebaruser', component: SidebaruserComponent},
  {path: 'usedash', component: UsedashComponent},
  {path: 'usestatut', component: UserStatutComponent},
  {path: '', redirectTo: '/usedash', pathMatch: 'full'},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


