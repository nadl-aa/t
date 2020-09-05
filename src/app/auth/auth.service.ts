import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReqResponse } from '../req-response';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {RequestInfo} from '../request-info';
import { Forgot } from '../forgot';
import { Forgotresponse } from '../forgotresponse';
import {Otpresponse} from '../otpresponse';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'X-API-KEY':'eyJhbGciOiJIUzI1NiJ9.eyJhcGlLZXlEZXNjIjoiQVBJIGtleSBmb3IgQ3VzdG9tZXJJZGVudGl0eU1pY3Jvc2VydmljZSAtIFdlYiIsImNvbnRleHQiOm51bGwsImFwaUtleUlkIjoiMDFFRVc4SllDTlpUSEdLNVE0QUVYNUpLVFoiLCJleHAiOjE3MDQwMDM4NTgsInVzZXJJZCI6IkN1c3RvbWVySWRlbnRpdHlXZWIifQ.gbpVmgwh2ydMU-MnddmSjEzN7lOpXmcRfunmk4bb2G4'
 })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData;
  otpid;
  info;
  defaultHeaders = new HttpHeaders();
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private ReqUrl = 'http://localhost:8080/api/auth/req';
  private FogotUrl = 'http://localhost:8080/api/auth/forgot';
 // private validateUrl = 'http://localhost:8080/api/auth/check';
 private validateUrl = 'https://svc-validation-mobile.dev-cluster.nadl.co.in/api/v1/mobile-validations';
  private validatotpeUrl = 'http://localhost:8080/api/auth/otp';
  constructor(private http: HttpClient) {
    this.userData = new SignUpInfo();
  }


  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  request(credentials: RequestInfo): Observable<ReqResponse> {
    return this.http.post<ReqResponse>(this.ReqUrl, credentials, httpOptions);
  }
  forgot(credentials: Forgot): Observable<Forgotresponse> {
    return this.http.post<Forgotresponse>(this.FogotUrl, credentials, httpOptions);
  }

  signUp(): Observable<any> {
   // console.log('info', info);
    const body = this.userData;
    return this.http.post(this.signupUrl, body, httpOptions);
  }
  setUserInfo(userData) {
    this.userData = userData;
  }
  getUserInfo() {
    return this.userData;
  }
  checkMobileValidation(mobileno): Observable<any> {
      const body = {
        mobile_no: mobileno
      };
      return this.http.post<any>(this.validateUrl, body, httpOption);
  }
  checkMobileValidationChallenge(otp): Observable<any> {
    const body = {
      challenge_response: otp,
      otpValidationId: this.otpid
    };
    return this.http.post<any>(this.validateUrl + '/' + this.otpid + '/challenge-response', body, httpOption);
}
}
