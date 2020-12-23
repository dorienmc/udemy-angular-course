import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify request (request is immutable, so we have to clone it)
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});

    // Continue request
    return next.handle(modifiedRequest);
  }
}
