import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { CertificateService } from 'src/app/shared/certificates.service';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrls: ['./add-certification.component.css']
})
export class AddCertificationComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService, private certService: CertificateService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const certificate: any = {
      issuer: form.value.issuerName,
      certification: form.value.certification,
      certNumber: form.value.certificationID
    };
    this.certService.postCertificate(certificate).subscribe(
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
