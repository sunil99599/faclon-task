import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: any;

  success: any;
  errorMsg: any;
  error: string;
  return = '';

  submitted = false;

  options: AnimationOptions = {
    path: '/assets/login.json',
  };

  animationCreated(animationItem: AnimationItem): void {}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private tokenService: TokenService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.route.queryParams.subscribe((params) => {
      this.return = params['return'] || '/';
    });
    this.init();
    $('#username').focus();
    let token = this.tokenService.getToken();
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  init() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.error = '';
    if (this.loginForm.valid) {
      this.submitted = true;
      setTimeout(() => {
        this.auth.loginUser(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            this.submitted = false;
            if (result.token) {
              this.tokenService.setToken(result.token);
              this.router.navigateByUrl(this.return);
            }
          },
          (err) => {
            this.submitted = false;
            this.error = err.error.message;
            console.log(err);
          }
        );
      }, 2000);
    }
  }
}
