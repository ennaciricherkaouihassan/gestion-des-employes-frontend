import {Component, EventEmitter, Output , OnInit} from '@angular/core';
import {UserService} from "../controller/service/user.service";
import {User} from "../controller/modal/user.model";

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddEmployeComponent implements OnInit{
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
  }}

