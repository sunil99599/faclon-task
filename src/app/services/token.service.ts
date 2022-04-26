import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    var data = localStorage.getItem('token');
    return data;
  }

  deleteToken() {
    return localStorage.removeItem('token');
  }

  getPayload() {
    const data = this.getToken();
    let payload;
    if (data) {
      payload = data.split('.')[1];
      payload = JSON.parse(window.atob(payload));
      return payload.data;
    } else {
      return null;
    }
  }

  onLogout() {
    this.deleteToken();
    this.router.navigate(['/login'], {
      queryParams: { return: this.router.url },
    });
  }
}
