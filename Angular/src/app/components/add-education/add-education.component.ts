import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { SchoolsService } from '../../shared/schools.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService, private schoolsService: SchoolsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const school: any = {
      schoolName: form.value.schoolName,
      schoolType: form.value.schoolType,
      address: form.value.schoolAddress,
      city: form.value.schoolCity,
      state: form.value.schoolState,
      zip: form.value.schoolZIP,
      degree: form.value.schoolDegree,
      major: form.value.schoolMajor,
      yearsCompleted: form.value.schoolYears
    };
    this.schoolsService.postSchool(school).subscribe(
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      city: '',
      phone: '',
      education: [],
      employment: [],
      certifications: [],
      referrals: []
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
