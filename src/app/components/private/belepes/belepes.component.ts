import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

export interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
})
export class BelepesComponent implements OnInit {

  model: LoginModel = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model.email, this.model.password)
      .then((res) => {
        this.authService.updateUserData(res.user);
        this.router.navigate(['/' + "privat"]);
      })
      .catch((err) => {
        //self.errorMessage = err.message;
      });
  }
}
