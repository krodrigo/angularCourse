import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private registerService: RegisterService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${this.registerService.token}`) });

    return next.handle(req);
  }
}
