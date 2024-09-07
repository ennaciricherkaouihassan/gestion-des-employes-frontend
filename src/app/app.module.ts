import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AddEmployeComponent} from './addemploye/addemploye.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {utilisateurComponent} from './utilisateur/utilisateur.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {UsedashComponent} from './usedash/usedash.component';
import {UserStatutComponent,} from './usestatut/usestatut.component';
import {SidebaruserComponent} from './sidebaruser/sidebaruser.component';
import {UserComponent} from './user/user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebaruserComponent,
    AddEmployeComponent,
    DashboardComponent,
    utilisateurComponent,
    UsedashComponent,
    UserStatutComponent,
    UserComponent,
    LoginComponent
  ],


  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
