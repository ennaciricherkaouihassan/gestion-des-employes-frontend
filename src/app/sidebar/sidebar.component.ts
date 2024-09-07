import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Cette propriété contrôlera l'affichage du bouton de déconnexion
  isLogoutVisible = false;

  // Méthode pour basculer l'affichage du bouton de déconnexion
  toggleLogoutButton() {
    this.isLogoutVisible = !this.isLogoutVisible;
  }

}
