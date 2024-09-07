import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../controller/service/user.service";
import {User} from "../controller/modal/user.model";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class utilisateurComponent implements OnInit{
  isAddEmployeeModalOpen = false;


  openAddEmployeeModal() {
    this.isAddEmployeeModalOpen = true;
  }

  closeAddEmployeeModal() {
    this.isAddEmployeeModalOpen = false;
  }
  // Déclarez la propriété 'users' comme un tableau d'objets 'User'
  @Output() close = new EventEmitter<void>();
  user = new User() ;
  closeModal() {
    this.close.emit();
  }
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Assignez les données à la propriété 'users' lorsque les données sont récupérées
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
