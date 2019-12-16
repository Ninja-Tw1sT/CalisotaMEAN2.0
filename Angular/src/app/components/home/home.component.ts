import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';
import { CertificateService } from '../../shared/certificates.service';
import { SchoolsService } from '../../shared/schools.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userDetails;
  constructor(
    private userService: UserService,
    private certService: CertificateService,
    private schoolsService: SchoolsService,
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
    ) { }

    public SchoolList: School[];
    public EmployerList: Employer[];
    public CertificationList: Certificate[];
    public ReferralsList: Referrals[];
    showSucessMessage: boolean;
    serverErrorMessages: string;
  model = {
    firstName: '',
    lastNmae: '',
    email: '',
    password: '',
    city: '',
    phone: ''
  };

  certificationsColumns: string[] = ['issuer', 'certification', 'certNumber'];
  certsDataSource: any[];

  employerColumns: string[] = [
    'employerName',
    'address',
    'city',
    'state',
    'zip',
    'supervisionContact',
    'phone',
    'position',
    'startDate',
    'endDate',
    'reasonForQuiting'
  ];
  employerDataSource: any[];

  schoolsColumns: string[] = [
    'schoolName',
    'schoolType',
    'address',
    'city',
    'state',
    'zip',
    'degree',
    'major',
    'yearsCompleted'
  ];
  schoolsDataSource: any[];

  selectedSchollTypeVal: string;

  showCertificateForm: boolean;
  showSchoolsForm: boolean;
  showEmploymentsForm: boolean;

  // forms
  certificateForm: FormGroup;
  schoolsForm: FormGroup;
  employmentsForm: FormGroup;

  ngOnInit() {
    this.SchoolList = [];
    this.EmployerList = [];
    this.CertificationList = [];

    this.showCertificateForm = false;
    this.showSchoolsForm = false;
    this.showEmploymentsForm = false;

    // init reactive forms
    this.certificateForm = this.fb.group({
      issuer: ['', [
        Validators.required
      ]],
      certification: ['', [
        Validators.required
      ]],
      certNumber: ['', [
        Validators.required
      ]]
    });

    this.schoolsForm = this.fb.group({
      schoolName: '',
      schoolType: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      degree: '',
      major: '',
      yearsCompleted: ''
    });
    this.employmentsForm = this.fb.group({
      employerName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      supervisionContact: '',
      phone: '',
      position: '',
      startDate: '',
      endDate: '',
      reasonForQuiting: ''
    });

    // get updated user data
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);
       }
    );

    // refresh lists
    this.refreshCertificatesList();
    this.refreshEmploymentsList();
    this.refreshSchoolsList();
  }

  addNewEmployer() {
    this.employeeService.postEmployee(this.employmentsForm.value)
    .subscribe(
      (res: any) => {
        this.refreshEmploymentsList();
        this.toggleEmploymentsForm();
      },
      err => {
        console.log('Error adding employer', err);
      }
    );
  }

  removeLastEmployer() {
    this.EmployerList.pop();
    this.employerDataSource = this.EmployerList;
  }

  addNewSchool() {
    this.schoolsService.postSchool(this.schoolsForm.value)
    .subscribe(
      (res: any) => {
        this.refreshSchoolsList();
        this.toggleSchoolsForm();
      },
      err => {
        console.log('Error adding school', err);
      }
    );
  }

  removeLastSchool() {
    this.SchoolList.pop();
    this.schoolsDataSource = this.SchoolList;
  }

  toggleCertificationForm() {
    this.showCertificateForm = !this.showCertificateForm;
    if (this.showCertificateForm) {
      this.certificateForm.reset();
    }
  }
  toggleSchoolsForm() {
    this.showSchoolsForm = !this.showSchoolsForm;
    if (this.showSchoolsForm) {
      this.schoolsForm.reset();
    }
  }
  toggleEmploymentsForm() {
    this.showEmploymentsForm = !this.showEmploymentsForm;
    if (this.showEmploymentsForm) {
      this.employmentsForm.reset();
    }
  }

  addNewCertification() {
    this.certService.postCertificate(this.certificateForm.value)
    .subscribe(
      (res: any) => {
        this.refreshCertificatesList();
        this.toggleCertificationForm();
      },
      err => {
        console.log('Error adding certificate', err);
      }
    );
  }

  refreshCertificatesList() {
    this.certService.getCertificateList()
      .subscribe(
        (res: any) => {
          this.CertificationList = res.certificates;
          this.certsDataSource = this.CertificationList;
        },
        err => {
          console.log('Error getting certificates', err);
        }
      );
  }

  refreshSchoolsList() {
    this.schoolsService.getSchoolsList()
      .subscribe(
        (res: any) => {
          this.SchoolList = res.schools;
          this.schoolsDataSource = this.SchoolList;
        },
        err => {
          console.log('Error getting schools', err);
        }
      );
  }

  refreshEmploymentsList() {
    this.employeeService.getEmployeeList()
    .subscribe(
      (res: any) => {
        this.EmployerList = res.employments;
        this.employerDataSource = this.EmployerList;
      },
      err => {
        console.log('Error getting employments', err);
      }
    );
  }

  removeLastCertification() {
    this.CertificationList.pop();
    this.certsDataSource = this.CertificationList;
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

export class Referrals {
  public id: number;
  public name: string;
  public phone: number;
  public email: string;
  public years: number;
}
