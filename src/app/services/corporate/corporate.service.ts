import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class CorporateService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private config: ConfigService) { }

  readCorporates(): Observable<any> {
    return this.httpClient.get(this.config.BackendIp + '/corporate', {headers: this.headers});
  }

  readCorporateById(id: string): Observable<any> {
    return this.httpClient.get(this.config.BackendIp + '/corporate/' + id, {headers: this.headers});
  }

  deleteCorporate(id: string): Observable<any> {
    return this.httpClient.delete(this.config.BackendIp + '/corporate/' + id,  {headers: this.headers});
  }

  updateCorporate(data: any): Observable<any> {
    const body = {};
    return this.httpClient.patch(this.config.BackendIp + '/corporate', body,  {headers: this.headers});
  }
}
