import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../controller/service/user.service';
import {User} from '../controller/modal/user.model';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  @Output() close = new EventEmitter<void>();

  user: User = new User();
  users: User[] = [];
  search: string = '';
  currentPage: number = 1;
  role: string = '';
  isAddEmployeeModalOpen: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => this.users = data,
      error: (error) => console.error('Erreur lors du chargement des utilisateurs', error)
    });
  }

  findByFirstNameAndLastName(): void {
    if (this.search.length > 1) {
      this.userService.searchByCriteria(this.search).subscribe({
        next: (data: User[]) => this.users = data,
        error: (error) => console.error('Erreur lors de la recherche', error)
      });
    } else {
      this.loadUsers();
    }
  }

  filterByRole(): void {
    if (this.role === '') {
      this.loadUsers();
    } else {
      this.userService.findByRole(this.role).subscribe({
        next: (data: User[]) => this.users = data,
        error: (error) => console.error('Erreur lors du filtrage', error)
      });
    }
  }

  deleteUser(user: User): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.firstName} ${user.lastName} ?`)) {
      // @ts-ignore
      this.userService.deleteUser(user.id).subscribe({
        next: (response) => {
          console.log('Utilisateur supprimé avec succès', response);
          this.users = this.users.filter(u => u.id !== user.id);
        },
        error: (error) => console.error('Erreur lors de la suppression', error)
      });
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  openAddEmployeeModal() {

  }

  closeAddEmployeeModal() {

  }

  updateRole(item: User) {
    this.userService.updateUser(item).subscribe(res => {
      console.log(res)
    }, error => {
      console.error(error)
    })
  }
}
