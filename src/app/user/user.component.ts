import {Component, OnInit} from '@angular/core';
import {UserService} from "../controller/service/user.service";
import {User} from "../controller/modal/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[] = [] //
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res
        console.log(res)
      })
  }

}
