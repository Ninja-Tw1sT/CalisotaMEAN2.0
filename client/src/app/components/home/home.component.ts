import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }
    public SchoolList: School[];
    public EmployerList: Employer[];
    public CertificationList: Certificate[];
    showSucessMessage: boolean;
    serverErrorMessages: string;
  model = {
    fullName: '',
    email: '',
    password: '',
    city: '',
    phone: ''
  };

  ngOnInit() {
    this.SchoolList = [];
    this.EmployerList = [];
    this.CertificationList = [];
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
       }
    );
  }

  addNewEmployer() {
    var emp = new Employer();
    emp.id = this.EmployerList.length;
    this.EmployerList.push(emp);
    console.log(`New Employer Added...`);
  }

  removeLastEmployer() {
    this.EmployerList.pop();
  }

  addNewSchool() {
    var sch = new School();
    sch.id = this.SchoolList.length;
    this.SchoolList.push(sch);
    console.log(`New School Added...`);
  }

  removeLastSchool() {
    this.SchoolList.pop();
  }

  addNewCertification() {
    var crt = new Certificate();
    crt.id = this.CertificationList.length;
    this.CertificationList.push(crt);
    console.log(`New Certification Added...`);
  }

  removeLastCertification() {
    this.CertificationList.pop();
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    }
    );
  }
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: '',
      city: '',
      phone: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}


export class School {
  public id: number;
  public name: string;
}

export class Employer {
  public id: number;
  public name: string;
  public startdate: Date;
  public enddate: Date;
  public reasonforquitting: string;
}

export class Certificate {
  public id: number;
  public name: string;
  public startdate: Date;
  public enddate: Date;
}
