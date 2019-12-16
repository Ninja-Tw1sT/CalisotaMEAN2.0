import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-employment',
  templateUrl: './add-employment.component.html',
  styleUrls: ['./add-employment.component.css']
})

export class AddEmploymentComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const employer: any = {
      employerName: form.value.employerName,
      address: form.value.employerAddress,
      city: form.value.employerCity,
      state: form.value.employerState,
      zip: form.value.employerZIP,
      supervisionContact: form.value.employerContact,
      phone: form.value.employerPhone,
      position: form.value.employerPositon,
      startDate: form.value.employerStart,
      endDate: form.value.employerEnd,
      reasonForQuiting: form.value.employerReason
    };
    this.employeeService.postEmployee(employer).subscribe(
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
