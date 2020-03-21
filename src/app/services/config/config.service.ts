import { Injectable } from '@angular/core';

export interface ConfigurationModel {
  backendIp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configuration: ConfigurationModel = {
    backendIp: 'localhost:3000',
    // backendIp: 'backend.volunteervsvirus.de',
  };

  constructor() { }

  get BackendIp(): string {
    return this.configuration.backendIp;
  }
}
