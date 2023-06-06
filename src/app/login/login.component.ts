import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  loginForm: FormGroup
  error: Boolean
  loading: Boolean

  constructor(private fb: FormBuilder, private userLoginService: UserLoginService, private router: Router) {
    this.loginForm = fb.group({
      userId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.error = false
    this.loading = false
  }

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
    if(this.loginForm.valid){
      this.loading = true
      let user = new User()
      user.userId = this.loginForm.get('userId')?.value
      user.password = this.loginForm.get('password')?.value
      this.userLoginService.userLogin(this.user).subscribe(res => {
        this.loading = false
        sessionStorage.setItem('userId', `${this.user.userId}`);
        sessionStorage.setItem('password', `${this.user.password}`);
        this.router.navigate(['/backoffice']);
      }, error => {
        this.error = true
        this.loading = false
      })
    }
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit(){
    this.isLogged()
  }
}
