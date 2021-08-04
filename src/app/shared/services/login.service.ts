import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessModel } from '../models/access.model';
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

  loginApi(): Observable<any> {
    const newAccess = this.infoAccess();

    const params = new HttpParams()
      .set('email', newAccess.email)
      .set('password', newAccess.password);

    return this.httpClient.post<any>(`${this.api}login`, params);
  }

  verifyUserLogged(): Observable<any> {
    return this.httpClient.post<any>(`${this.api}logged`, {}, { headers: this.tokenService.headersOptions() });
  }

  logoutApi(): Observable<any> {
    return this.httpClient.post<any>(`${this.api}logout`, {}, { headers: this.tokenService.headersOptions() });
  }

  private infoAccess(): AccessModel {
    const access = new AccessModel();
    access.email = environment.userToken;
    access.password = environment.passToken;
    return access;
  }
}
