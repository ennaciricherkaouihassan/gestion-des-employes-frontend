import {Component, OnInit , EventEmitter, Output} from '@angular/core';
import {User} from "../controller/modal/user.model";
import {UserService} from "../controller/service/user.service";

@Component({
  selector: 'app-userstatut',
  templateUrl: './usestatut.component.html',
  styleUrls: ['./usestatut.component.css']
})
export class UserStatutComponent {
  @Output() close = new EventEmitter<void>();

  user = new User() ;
  closeModal() {
    this.close.emit();
  }
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
