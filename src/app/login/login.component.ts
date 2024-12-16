import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  responseData: any;
  errorMessage:string='';
  constructor(private loginService: LoginService,private router:Router) { }
  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    const requestBody = { username: this.username, password: this.password };
    this.loginService.postData(requestBody).subscribe(
      response => {
        console.log('API Response:', response);
        this.responseData = response;
        if(response.statusCode==200)
          this.router.navigate(['/products']);
        else
          this.errorMessage='wrong credentials';
      },
      error => {
        console.error('Error:', error);
        this.errorMessage='some error occurred';
      }
    );
    // Add authentication logic and navigate to the next page upon successful login
  }
}
