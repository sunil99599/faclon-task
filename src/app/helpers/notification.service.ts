import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService implements OnInit {
  constructor(private router: Router) {
    this.toastroptions();
  }

  ngOnInit(): void {}

  setSuccess(title, msg) {
    toastr['success'](msg, title);
  }

  setWarning(title, msg) {
    toastr['warning'](msg, title);
  }

  setError(title, msg) {
    toastr['error'](`${msg}`, title);
  }

  toastroptions() {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '4000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
  }
}
