import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  timervalue: string;
  currentTime: string;
  hideTimer = false;
  data:any;
  otpForm: FormGroup;
  constructor( private readonly formBuilder: FormBuilder, private readonly authenticationService : AuthService, private router : Router) {
    this.otpForm = this.formBuilder.group({
      box1: ['', [Validators.required //,
    //  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
    ]
      ]
    });
  }
    goToNextScreen(otp)
    {
     // alert(otp);
      this.authenticationService.checkMobileValidationChallenge(otp.box1).subscribe(
        (resData: any) => {
         this.data = 'sucess';
         this.authenticationService.otpid = '';
         this.router.navigate(['/set-credential']);
        },
        error => {
          console.log(error);
          this.data ='Invalid OTP';

    });
  }

  ngOnInit() {
    this.initiateTimer();
  }
  resendOtp()
  {
    const user = this.authenticationService.getUserInfo();
    this.authenticationService.checkMobileValidation(user.mobile).subscribe(
      data => {
        this.authenticationService.otpid = data.id;
  },
  error => {
  console.log(error);
  // this.errorMessage = error.error.message;
  // this.isSignUpFailed=true;
  // this.isLoginFailed = true;
 }
);
}
  initiateTimer() {
    this.timervalue = '120';
    const x = setInterval(() => {
      this.timervalue = this.calculateRemainingTime(this.timervalue, x);
    }, 1000);
  }
  calculateRemainingTime(incomingTime, intervalInstance) {
    let timeRemaining = incomingTime;
    timeRemaining = timeRemaining % 3600;

    const minute = timeRemaining / 60;
    const minutes = parseInt(minute.toString(), 10);
    timeRemaining = timeRemaining % 60;

    const seconds = parseInt(timeRemaining.toString(), 10);
    this.currentTime = (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
    incomingTime = incomingTime ? Number(incomingTime) - 1 : '';
    if (incomingTime === '') {
      clearInterval(intervalInstance);
      this.hideTimer = true;
      return '';
    } else {
      this.hideTimer = false;
      return this.currentTime === '0:1' ? '0' : incomingTime;
    }
  }

}
