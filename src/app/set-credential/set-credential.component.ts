import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-set-credential',
  templateUrl: './set-credential.component.html',
  styleUrls: ['./set-credential.component.scss']
})


export class SetCredentialComponent   implements OnInit  {
  setCrediantialForm: FormGroup;
  data;
  //matcher = new MyErrorStateMatcher();
  constructor(   private readonly formBuilder: FormBuilder,
    private readonly router: Router, private readonly authenticationService : AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.setCrediantialForm = this.formBuilder.group(
      {
        id: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        password: [
          '',
          [Validators.required,  Validators.minLength(8), Validators.maxLength(20),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,20}')]
        ]

  }
    );
}

  setCrediantial(value) {
    const userData = this.authenticationService.getUserInfo();
    userData.username = value.id;
    userData.password = value.password;
    this.authenticationService.setUserInfo(userData);
    this.authenticationService.signUp().subscribe(
      data => {
        this.data='Verification email is sent';
        this.router.navigate(['/home']);
      },
      error => {
        this.data = JSON.stringify(error.error);
});
  }
}
