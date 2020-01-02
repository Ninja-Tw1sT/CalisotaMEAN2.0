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
  providers: [EmployeeService]
})
export class AddDocumentationComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private FileService: FilesService) { }
  public uploader: FileUploader;
  public files = [];
  public url = 'http://localhost:3000/upload';

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
    this.FileService.showFileNames().subscribe(response => {
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].contentType
        };
      }
    });
  }

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    );
  }
}
