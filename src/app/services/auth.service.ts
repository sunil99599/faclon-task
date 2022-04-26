import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of as ObservableOf } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(loginData): Observable<any> {
    const { username, password } = loginData;
    let dummyData = {
      data: {
        fullname: 'sunil',
        address: 'vijayawada',
        role: 'intern',
      },
    };
    let encrypted = window.btoa(JSON.stringify(dummyData));
    let token = `itsadummytoken.${encrypted}`;
    const result = from(
      new Promise((resolve, reject) => {
        if (username !== 'admin' && password !== '123456') {
          reject({ error: { message: 'Username or Password is incorrect!' } });
        }
        resolve({ token });
      })
    );

    return result;
    // return this.http.post(environment.apiURL + "/login", body);
  }
}
