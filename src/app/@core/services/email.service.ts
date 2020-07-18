import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor(
    private http: HttpClient,
  ) { }

  sendContactEmail(data: {
    email: string,
    subject: string,
    message: string,
  }): Observable<any> {
    console.log(data);
    return of('');
  }
}
