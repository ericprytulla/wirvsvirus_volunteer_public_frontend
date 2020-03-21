import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders();

  constructor(private httpService: HttpClient, private config: ConfigService) { }

  login(username: string, password: string): Observable<any> {
    const body = {username, password};
    return  this.httpService.post(this.config.BackendIp + '/login', body, {headers: this.headers});
  }

  logout(): Observable<any> {
    const body = {};
    return this.httpService.post(this.config.BackendIp + '/logout', body, {headers: this.headers});
  }
}