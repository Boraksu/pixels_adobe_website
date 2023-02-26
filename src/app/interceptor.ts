import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ErrorComponent} from './error/error.component';

/**
 * Pass untouched request through to the next request handler.
 **/
@Injectable()
export class ServerInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auxReq = req.clone({
            url: `http://localhost:3000${req.url}`
        });
        return next.handle(auxReq).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    errorMessage = `Client side error Message: ${error.error.message}`;
                } else {
                    errorMessage = `Server side error Message: ${error.message}`;
                }
                this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
                return throwError(errorMessage);
            })
        );
    }
}
