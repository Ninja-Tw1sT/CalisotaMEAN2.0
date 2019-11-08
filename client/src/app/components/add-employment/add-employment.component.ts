import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employment',
  templateUrl: './add-employment.component.html',
  styleUrls: ['./add-employment.component.css']
})
export class AddEmploymentComponent implements OnInit {

  constructor() { }
  public EmployerList: Employer[];
  ngOnInit() {
    this.EmployerList = [];
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
}
export class Employer {
  public id: number;
  public name: string;
  public startdate: Date;
  public enddate: Date;
  public reasonforquitting: string;
}
