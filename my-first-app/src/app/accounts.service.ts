import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable() // Tells that I want to inject something in this service
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string): void {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string): void {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
