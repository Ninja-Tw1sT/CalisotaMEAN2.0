import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class CertificateService {
  readonly baseURL =  environment.apiBaseUrl + '/certificates';

  constructor(private http: HttpClient) { }

  postCertificate(cert: any) {
    return this.http.post(this.baseURL, cert);
  }

  getCertificateList() {
    return this.http.get(this.baseURL);
  }

  putCertificate(cert: any) {
    return this.http.put(this.baseURL + `/${cert._id}`, cert);
  }

  deleteCertificate(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
