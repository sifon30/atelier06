import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
