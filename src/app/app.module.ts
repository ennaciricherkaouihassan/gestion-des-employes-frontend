import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AddEmployeComponent} from './addemploye/addemploye.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {UsedashComponent} from './usedash/usedash.component';
import {UserStatutComponent,} from './usestatut/usestatut.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {UserComponent} from './user/user.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChipsModule} from "primeng/chips";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {CalendarModule} from "primeng/calendar";
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddEmployeComponent,
    DashboardComponent,
    UsedashComponent,
    UserStatutComponent,
    UserComponent,
    UtilisateurComponent,
    LoginComponent,

  ],


  imports: [
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ChipsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
