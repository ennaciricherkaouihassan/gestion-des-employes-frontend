import {Injectable} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {User} from "../modal/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8090/api/users'; // URL de l'API Spring Boot

    private roleSubject = new BehaviorSubject<string | null>(null);
    role$ = this.roleSubject.asObservable();
    user: User = new User();

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.get<User>(this.apiUrl + '/login/' + email + '/' + password)
            .pipe(tap((user) => {
                this.user = user
                localStorage.setItem('user', JSON.stringify(user))
                // @ts-ignore
                this.roleSubject.next(user.role);
                // @ts-ignore
                localStorage.setItem('userRole', user.role);
            }));
    }


    getRole(): string | null {
        return localStorage.getItem('userRole');
    }

    getUser(): User | null {
        const str = localStorage.getItem('user');
        if (str) {
            return JSON.parse(str);
        }
        return null;
    }

    logout() {
        this.roleSubject.next(null);
        localStorage.removeItem('userRole');
    }
}
