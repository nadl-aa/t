import { Component, OnInit } from '@angular/core';
import {RequestInfo} from '../request-info';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  form: any = {};
  requestInfo: RequestInfo;
  isregistered = false;
  errorMessage = '';
  data:any;
  username:string;
  status:string;
  name:string;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.username = this.tokenStorage.getUsername();
    this.status=this.tokenStorage.getStatus();
    this.name=this.tokenStorage.getUsername();
   // this.info = {
     // token: this.token.getToken(),
      //username: this.token.getUsername(),
   //   authorities: this.token.getAuthorities()
    //};
    if(this.status=='true')
    {
      this.isregistered = true;
    }
    else{
      this.isregistered = false;
    }

  }

  onSubmit() {
    console.log(this.form);

    this.requestInfo = new RequestInfo(
      this.form.baseurl,
      this.form.ip,
      this.form.port,
      this.form.aaapikey,
      this.form.publickey,
      this.username
      );

    this.authService.request(this.requestInfo).subscribe(
      data => {
        console.log(data);
       // alert(JSON.stringify(data));
        this.isregistered = true;
        this.data = JSON.stringify(data);
        this.tokenStorage.saveStatus('true');
      },
      error => {
        console.log(error);
        this.data = JSON.parse(error.error);
        this.isregistered = false;
      }
    );
  }

}
