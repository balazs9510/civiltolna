import { Component } from '@angular/core';
import {FirebaseApp} from '@angular/fire'
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor(private authService: AuthService) 
  {
    this.authService.setLogggedIn();
  }
}
