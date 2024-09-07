import {Component} from '@angular/core';
import {AuthService} from "../controller/service/auth.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";



// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  loginForm!: FormGroup ;



  constructor(private authService: AuthService, private router: Router) {
  }


  login() {
    this.authService.login(this.email, this.password).subscribe((user) => {
      if (user.role === 'ADMIN') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/usedash']);
      }
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log(this.loginForm.value);
  }
}}

