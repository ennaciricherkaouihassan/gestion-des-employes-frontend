import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from "../controller/modal/user.model";
import {UserService} from "../controller/service/user.service";
import {AuthService} from "../controller/service/auth.service";

@Component({
  selector: 'app-userstatut',
  templateUrl: './usestatut.component.html',
  styleUrls: ['./usestatut.component.css']
})
export class UserStatutComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  user = new User();

  constructor(private userService: UserService, private authService: AuthService) {
  }


  get showStatusDialog(): boolean {
    return this.userService.showStatusDialog;
  }

  set showStatusDialog(value: boolean) {
    this.userService.showStatusDialog = value;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = this.authService.getUser()
  }

  get users(): User[] {
    return this.userService.users;
  }

  set users(value: User[]) {
    this.userService.users = value;
  }

  onSubmit() {
    this.user.id = this.authService.getUser()?.id
    console.log('Form submitted', this.user); // Add this to check if form is submitted and the user data is correct
    this.userService.updateStatus(this.user).subscribe(
      response => {
        this.authService.setUser(response)
        console.log('status updated successfully', response);
        this.users[this.users.indexOf(<User>this.users.find(s => s.id === response.id))] = response
        this.showStatusDialog = false
      },
      error => {
        console.error('Error creating user', error);
        // Show error message to the user
      }
    );
  }

  cancel() {
    this.showStatusDialog = false;
  }
}

