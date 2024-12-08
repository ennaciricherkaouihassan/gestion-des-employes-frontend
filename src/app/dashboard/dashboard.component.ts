import {Component, OnInit} from '@angular/core';
import {User} from "../controller/modal/user.model";
import {UserService} from "../controller/service/user.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  surSite: number = 0;
  teleTravail: number = 0;
  enConge: number = 0;
  status: string = '';
  // @ts-ignore
  date: Date;
  search: string = '';
  currentPage = 1;
  editForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    // Initialisation du formulaire réactif pour l'édition
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      team: [''],
      status: ['']
    });
  }


  get users(): User[] {
    return this.userService.users;
  }

  set users(value: User[]) {
    this.userService.users = value;
  }


  get selectedUser(): User {
    return this.userService.selectedUser;
  }

  set selectedUser(value: User) {
    this.userService.selectedUser = value;
  }

  get isAddEmployeeModalOpen(): boolean {
    return this.userService.isAddEmployeeModalOpen;
  }

  set isAddEmployeeModalOpen(value: boolean) {
    this.userService.isAddEmployeeModalOpen = value;
  }

  ngOnInit(): void {
    this.findAll();
    this.userService.countByStatus("site").subscribe((data: number) => {
      this.surSite = data;
    });
    this.userService.countByStatus("teletravail").subscribe((data: number) => {
      this.teleTravail = data;
    });
    this.userService.countByStatus("conge").subscribe((data: number) => {
      this.enConge = data;
    });


  }

  private findAll() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  filterByStatus() {
    if (this.status === 'null') {
      this.findAll();
    } else {
      this.userService.findByStatus(this.status).subscribe((data: User[]) => {
        this.users = data;
      });
    }
  }

  filterByDate() {
    console.log(this.date);
    this.userService.findByDate(this.date)
      .subscribe(res => {
        this.users = res
      }, error => {
        console.error(error)
      })

  }

  findByFirstNameAndLastName() {
    if (this.search && this.search.length > 1) {
      this.userService.searchByCriteria(this.search).subscribe((data: User[]) => {
        this.users = data;
      });
    } else {
      this.findAll();
    }
  }

  openAddEmployeeModal() {
    this.selectedUser = new User()
    this.isAddEmployeeModalOpen = true;
  }


  editUser(user: User) {
    this.selectedUser = user;  // Clone l'utilisateur pour modification
    this.isAddEmployeeModalOpen = true;  // Ouvre le modal d'édition
  }

  deleteUser(user: User) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.firstName} ${user.lastName} ?`)) {
      // @ts-ignore
      this.userService.deleteUser(user.id).subscribe(
        (response) => {
          console.log('Utilisateur supprimé avec succès', response);
          this.users = this.users.filter(u => u.id !== user.id);
        },
        (error) => {
          console.error('Erreur lors de la suppression', error);
        }
      );
    }
  }


  closeAddEmployeeModal() {
    this.isAddEmployeeModalOpen = false;
  }


}
