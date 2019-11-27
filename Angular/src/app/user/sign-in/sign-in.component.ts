import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  model = {
    email: '',
    password: ''
  };
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if (this.userService.isLoggedIn()){
    this.router.navigateByUrl('/welcome');
    }
  }

  onSubmit(form: NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/welcome');         // W h e r e   T o   N a v i g a t e   O n   L o g i n
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
