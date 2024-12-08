import {Injectable, NgModule} from '@angular/core';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';
import {AddEmployeComponent} from './addemploye/addemploye.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {UserStatutComponent,} from './usestatut/usestatut.component';
import {UserComponent} from "./user/user.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

import {UsedashComponent} from "./usedash/usedash.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";


const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-employe', component: AddEmployeComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'login', component: LoginComponent},

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


