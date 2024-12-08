import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modal/user.model';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private apiUrl = 'http://localhost:8090/api/files'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) {
  }


  updateUserProfile(form: any, id: any): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(`${this.apiUrl}/uploadProfileImage/` + id, form, {responseType: 'text'});
  }
}
