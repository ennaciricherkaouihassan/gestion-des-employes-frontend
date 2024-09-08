import {Component, EventEmitter, Output , OnInit} from '@angular/core';
import {UserService} from "../controller/service/user.service";
import {User} from "../controller/modal/user.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddEmployeComponent  {
  user: any = {
    firstName: '',
    lastName: '',
    team: '',
    email: '',
    status: '',
    startDate: '',
    endDate: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.user); // Add this to check if form is submitted and the user data is correct
    this.userService.createUser(this.user).subscribe(
      response => {

        console.log('User created successfully', response);
        // Redirect or show success message
        this.router.navigate(['/users']);
      },
      error => {
        console.error('Error creating user', error);
        // Show error message to the user
      }
    );
  }
}
