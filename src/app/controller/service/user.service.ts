import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modal/user.model';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8090/api/users'; // URL de l'API Spring Boot
  private _users: User[] = [];
  private _isAddEmployeeModalOpen = false;
  private _showStatusDialog = false;
  private _selectedUser: User = new User(); // Utilisé pour stocker l'utilisateur sélectionné


  private isUsestatutModalOpen = false;

  constructor(private http: HttpClient,
              private datePipe: DatePipe) {
  }

  get selectedUser(): User {
    return this._selectedUser;
  }

  set selectedUser(value: User) {
    this._selectedUser = value;
  }

  get isAddEmployeeModalOpen(): boolean {
    return this._isAddEmployeeModalOpen;
  }

  set isAddEmployeeModalOpen(value: boolean) {
    this._isAddEmployeeModalOpen = value;
  }

  get showStatusDialog(): boolean {
    return this._showStatusDialog;
  }

  set showStatusDialog(value: boolean) {
    this._showStatusDialog = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/id/${id}`);
  }

  countByStatus(status: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/status/${status}`);
  }

  findByStatus(status: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/find/status/${status}`);
  }

  findByRole(status: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/find/role/${status}`);
  }

  findByDate(date: Date): Observable<User[]> {
    const dateString = this.datePipe.transform(date, 'YYYY-MM-dd')
    return this.http.get<User[]>(`${this.apiUrl}/find/date/${dateString}`);
  }

  searchByCriteria(search: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/search/${search}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  updateStatus(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/updateStatus`, user);
  }
}
