import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly api = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getToken = () => localStorage.getItem('access_token');

  refreshToken(): void {
    this.httpClient.post<any>(`${this.api}refresh`, {}, { headers: this.headersOptions() })
      .toPromise().then((info: any) => {
        if (info && info.access_token) {
          localStorage.setItem('access_token', info.access_token);
        }
      }, err => console.error(err, 'LoginService'));
  }

  headersOptions(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
      .set('Access-Control-Allow-Headers', '*')
      .set('Authorization', `bearer ${this.getToken()}`);

    return headers;
  }
}
