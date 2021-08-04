import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'upload-images';

  readonly BASE_ROUTE = ['/'];

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.verifyUserLogged();
  }

  verifyUserLogged(): void {
    this.loginService.verifyUserLogged().subscribe((response) => {
      if (response && response.status) { // token invalid
        this.loginApi();
        return;
      }

      this.router.navigate(this.BASE_ROUTE);
    }, err => {
      console.warn('Usuário não logado. ApiMsg:', err.error.error);
      this.loginApi();
    });
  }

  loginApi(): void {
    this.loginService.loginApi().subscribe((response) => {
      if (response && response.access_token) {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(this.BASE_ROUTE);
        return;
      }

      console.error('Erro no Login!');
    }, err => {
      console.error('Acesso não autorizado. ApiErro:', err.error.error);
      this.router.navigate(['404']);
    });
  }
}

