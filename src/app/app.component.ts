import {Router, NavigationEnd} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AuthService} from "./controller/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'userr';
  isSidebarVisible = true;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Cache le sidebar pour certaines routes
        this.isSidebarVisible = !event.url.includes('/login');
      }
    });
    this.canActivate()
  }

  canActivate(): void {
    const role = this.authService.getRole();
    if (role !== 'USER' &&  role !== 'ADMIN' ){
      this.router.navigate(['/login']);
    }
  }

  logout() {
    // Logique pour la déconnexion
    this.isSidebarVisible = false;
  }
}
