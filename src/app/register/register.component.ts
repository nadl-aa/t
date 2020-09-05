import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignUpFailed = false;
  isRegistered = false;
  errorMessage = '';
  data:any;
  selectedType:any;
  constructor(private authService: AuthService, private router : Router) { }
  userType = [
    {
      type: 'individual',
      enabled: 'assets/individual_enabled.svg',
      disabled: 'assets/individual_disabled.svg',
      displayText: 'Individual'
    },
    {
      type: 'non individual',
      enabled: 'assets/non_individual_enabled.svg',
      disabled: 'assets/non_individual_disabled.svg',
      displayText: 'Non-individual'
    }
  ];
  ngOnInit() { }
  selectUserType(data) {
    this.selectedType = data.type;
  //  alert(this.selectedType);
  }
  onSubmit() {
    console.log(this.form);

    const user = new SignUpInfo();
      user.name = this.form.name.trim();
     // user.this.form.username,
      user.email = this.form.email;
      //user.this.form.password,
      user.mobile = this.form.mobile;
      user.type = this.selectedType;
      user.role = ['user'];
      this.authService.setUserInfo(user);
      this.mobileValidation();
  }
      mobileValidation() {
        const user = this.authService.getUserInfo();
        this.authService.checkMobileValidation(user.mobile).subscribe(
          data => {
            this.authService.otpid = data.id;
            console.log(data);
           // alert(JSON.stringify(data.id));
            this.isSignUpFailed = false;
            this.data = 'Registration is successful';
            this.router.navigate(['/otp']);
          },
          error => {
            console.log(error);
           // this.errorMessage = error.error.message;
            this.isSignUpFailed = true;
            this.data = 'Registration is failed';
           // this.isLoginFailed = true;
          }
        );
    /*this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log('sucess', data);
        this.data=JSON.stringify(data.status);
        // alert(JSON.stringify(data));
         this.isSignUpFailed = false;
        // this.data = JSON.stringify(data);
      },
      error => {
  console.log('erroe', error);
        this.data = JSON.stringify(error.error);
        // this.isRegistered = true;
        this.isSignUpFailed = true;
      }
    );*/
  }
}
