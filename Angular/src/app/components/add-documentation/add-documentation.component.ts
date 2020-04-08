import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';
import { FileUploader } from 'ng2-file-upload';
import { FilesService } from './../files.service';


declare var M: any;


@Component({
  selector: 'app-add-documentation',
  templateUrl: './add-documentation.component.html',
  styleUrls: ['./add-documentation.component.css'],
})
export class AddDocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
