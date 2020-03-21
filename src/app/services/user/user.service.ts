import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private config: ConfigService) { }

  readUsers(): Observable<any> {
    return this.httpClient.get(this.config.BackendIp + '/user', {headers: this.headers});
  }

  readUserById(id: string): Observable<any> {
    return this.httpClient.get(this.config.BackendIp + '/user/' + id, {headers: this.headers});
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(this.config.BackendIp + '/user/' + id,  {headers: this.headers});
  }

  updateUser(data: any): Observable<any> {
    const body = {};
    return this.httpClient.patch(this.config.BackendIp + '/user', body,  {headers: this.headers});
  }
}
