import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private tokenservice: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const data = this.tokenservice.getToken();

    if (data) {
      headersConfig['authorization'] = `Bearer ${data}`;
    }
    const _request = req.clone({ setHeaders: headersConfig });

    return next.handle(_request);
  }
}
