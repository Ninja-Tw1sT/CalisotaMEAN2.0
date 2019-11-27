import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class SchoolsService {
  readonly baseURL =  environment.apiBaseUrl + '/schools';

  constructor(private http: HttpClient) { }

  postSchool(school: any) {
    return this.http.post(this.baseURL, school);
  }

  getSchoolsList() {
    return this.http.get(this.baseURL);
  }

  putSchool(school: any) {
    return this.http.put(this.baseURL + `/${school._id}`, school);
  }

  deleteSchool(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
