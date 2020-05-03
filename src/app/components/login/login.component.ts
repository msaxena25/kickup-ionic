import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login: any = { mobileNumber: '', otp: '' };
  submitted = false;
  isOTPSent = false;

  constructor(private toastService: ToastService, private router: Router) { }

  ngOnInit() { }

  sendOTP() {
    this.isOTPSent = true;
    console.log(this.login.mobileNumber);
    this.toastService.presentToast('OTP sent');

  }

  verify() {
    this.toastService.presentToast('OTP Verified');
    localStorage.setItem('isUserLoggedIn', 'true');
    this.router.navigateByUrl('/customer/job');
  }

}
