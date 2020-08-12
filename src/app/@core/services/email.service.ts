import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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
    return this.http.post('https://cameronerwin.ca/api/sendEmail', {
      from: data.email,
      subject: data.subject,
      body: data.message,
    });
  }

}
