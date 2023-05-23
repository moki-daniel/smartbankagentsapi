import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'smartplanner';
invalidCredentials = "wrong password";
password='';
invalidLogin = false

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password)
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect to landingpage
      this.router.navigate(['landingpage', this.username])
    this.invalidLogin = false
  } else {
    this.invalidLogin = true
  }
}
}
