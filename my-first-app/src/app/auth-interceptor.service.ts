import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log('Request is on its way');
    // Modify request (request is immutable, so we have to clone it)
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')});

    // Continue request
    return next.handle(modifiedRequest).pipe(tap(event => {
      // Update response
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived, body data: ');
        console.log(event.body);
      }
    }));
  }
}
