import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calisota App';

  constructor(private userService: UserService, private router: Router) { }

  onLogOut() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
