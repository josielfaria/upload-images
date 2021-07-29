import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly api = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  loginApi(data: any): void {
    const accessMock = { email: 'email@com', password: '12345678' }; // TODO: criar model e acesso ao token
    const formData = new FormData();
    formData.append('email', accessMock.email);
    formData.append('password', accessMock.password);

    this.httpClient.post<any>(`${this.api}/auth/login`, formData, { headers: this.tokenService.headersOptions })
      .toPromise().then((info: any) => {
        if (info && info.access_token) {
          localStorage.setItem('access_token', info.access_token);
          this.router.navigate(['home']);
          console.log('Login Realizado!');
        }
      }, err => console.error(err, 'LoginService'));
  }

  verifyUserLogged(): Observable<any> {
    return this.httpClient.post<any>(`${this.api}/auth/logged`, {}, { headers: this.tokenService.headersOptions });
  }

  logoutApi(): Observable<any> {
    return this.httpClient.post<any>(`${this.api}/auth/logout`, {}, { headers: this.tokenService.headersOptions });
  }
}
