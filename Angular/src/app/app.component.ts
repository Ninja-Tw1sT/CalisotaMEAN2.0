import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Calisota App';

  constructor(private userService: UserService, private router: Router) { }
  private uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment'

    });

  private onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);

  }

  onLogOut() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
