import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.css']
})
export class SidebaruserComponent {
  // Cette propriété contrôlera l'affichage du bouton de déconnexion
  isLogoutVisible = false;

  // Méthode pour basculer l'affichage du bouton de déconnexion
  toggleLogoutButton() {
    this.isLogoutVisible = !this.isLogoutVisible;
  }

}
