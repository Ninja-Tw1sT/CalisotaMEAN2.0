import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
  this.formGroup = formBuilder.group({
    enableWifi: false,
    acceptTerms: [false, Validators.requiredTrue]
  });
}

onFormSubmit(formValue: any) {
  alert(JSON.stringify(formValue, null, 2));
}

  ngOnInit() {
  }

}
