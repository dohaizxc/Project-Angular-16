import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from "primeng/password";
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { MessageModule } from 'primeng/message';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { DividerModule } from 'primeng/divider';
import { RegisterComponent } from './register/register.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifyComponent } from './verify/verify.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SocialLoginModule,
    AuthenticateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DividerModule,
    MessageModule,
    ToastModule,
    MessageModule,
    MessagesModule
  ],
  providers: [
    MessageService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '862554826072-hh67j8al3nlhopa5hnsu27m7p7fu5gr6.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    // AuthService
  ],

  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthenticateModule { }
