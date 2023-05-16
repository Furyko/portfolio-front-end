import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private userLoginService: UserLoginService, private router: Router) { }

  // Login validation
  isLogged(){
    let user = new User()
    user.userId = `${sessionStorage.getItem('userId')}`
    user.password = `${sessionStorage.getItem('password')}`
    this.userLoginService.userLogin(user).subscribe(data => {
      this.router.navigate(['/backoffice']);
    })
  }

  userLogin(){
    this.userLoginService.userLogin(this.user).subscribe(data => {
      sessionStorage.setItem('userId', `${this.user.userId}`);
      sessionStorage.setItem('password', `${this.user.password}`);
      this.router.navigate(['/backoffice']);
    }, error => {
      alert("Please enter a correct username and password")
    })
  }

  ngOnInit(){
    this.isLogged()
  }
}
