import { Component, OnInit } from '@angular/core';
import { Forgot } from '../forgot';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: any = {};
   forgot: Forgot;
  isForgotFailed;
  errorMessage;
  data:any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    this.forgot = new Forgot(
      this.form.username
      );

    this.authService.forgot(this.forgot).subscribe(
      data => {

        //this.tokenStorage.saveAuthorities(data.authorities);
        this.isForgotFailed = false;
        this.data = data.msg;

     //   this.roles = this.tokenStorage.getAuthorities();

      },
      error => {
        console.log(error);
        this.errorMessage = JSON.stringify(error.error);
        this.isForgotFailed = true;

      }
    );
  }

}
