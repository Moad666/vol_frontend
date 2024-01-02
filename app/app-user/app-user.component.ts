import { Component } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css']
})
export class AppUserComponent {
  username: string = '';
  password: string = '';
  constructor(private userService : AppUserService, private router : Router){}
  login() {
    this.userService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

}
