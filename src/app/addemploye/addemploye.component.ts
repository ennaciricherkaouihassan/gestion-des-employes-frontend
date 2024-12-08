import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {UserService} from "../controller/service/user.service";
import {User} from "../controller/modal/user.model";
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddEmployeComponent {


  constructor(private userService: UserService, private router: Router, private location: Location) {
  }

  get user(): User {
    return this.userService.selectedUser;
  }

  set user(value: User) {
    this.userService.selectedUser = value;
  }


  get users(): User[] {
    return this.userService.users;
  }

  set users(value: User[]) {
    this.userService.users = value;
  }

  get isAddEmployeeModalOpen(): boolean {
    return this.userService.isAddEmployeeModalOpen;
  }

  set isAddEmployeeModalOpen(value: boolean) {
    this.userService.isAddEmployeeModalOpen = value;
  }

  emailInvalid: any;


  onSubmit() {
    console.log('Form submitted', this.user);
    this.userService.createUser(this.user).subscribe(
      response => {
        console.log('User created successfully', response);
        if (!this.user?.id) {
          this.users.unshift({...response});
        }
        this.isAddEmployeeModalOpen = false;
        // Redirection après création de l'utilisateur
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Error creating user', error);
        // Gérer l'affichage du message d'erreur
      }
    );
  }

  cancel() {
    this.isAddEmployeeModalOpen = false;
  }

  addEmailDomain() {

  }
}
