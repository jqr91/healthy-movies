import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';
@Injectable()
export class HttpConfig implements HttpInterceptor {

    private url = environment.baseUrl;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: this.url + request.url,
            setHeaders: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzllMjZjYjVlMzEwZTIwYzYyNzNlN2MxNWY1YjQ2YyIsInN1YiI6IjYwNTk5ZDg2NzBiNDQ0MDA1NDRkN2ViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZrUwI3DPEsNavvZVo5T_Gn8OOnyq1_OX0Jw0wNa61Q'
            }
        });
        return next.handle(request);
    }
}