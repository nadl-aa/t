import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {
  AuthGuardService as AuthGuard
}  from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { RequestComponent } from './request/request.component';
import { ApiComponent } from './api/api.component';
import { ContactComponent } from './contact/contact.component';
import { HowtoComponent } from './howto/howto.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpComponent } from './otp/otp.component';
import { SetCredentialComponent } from './set-credential/set-credential.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
      path: 'about',
      component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
},
{
  path: 'otp',
  component: OtpComponent
},
{
  path: 'set-credential',
  component: SetCredentialComponent
},
{
  path: 'home/forgot',
  component: ForgotPasswordComponent
},
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home/request',
      component: RequestComponent,
     // canActivate: [AuthGuard]
  },
  {
    path: 'home/how',
    component: HowtoComponent,
    canActivate: [AuthGuard]
},
  {

      path: 'home/request/api',
      component: ApiComponent
     // canActivate: [AuthGuard]
  }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
