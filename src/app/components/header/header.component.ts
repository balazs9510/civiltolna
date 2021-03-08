import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = false;
  isPublic = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(r =>{
      this.isPublic = !r;
    })
  }
  signOut(){
    this.authService.signOut();
  }
}
