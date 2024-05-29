import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    new User('rose', 'ros1234'),
    new User('ednaldo', 'edn1234'),
    new User('rebeca', 'reb1234'),
    new User('sara', 'sar1234'),
  ];

  private logged: boolean = false;
  static instanceCount = 0;
  instanceId: number;

  constructor() {
    AuthService.instanceCount++;
    this.instanceId = AuthService.instanceCount;
    console.log(`AuthService instance created: ${this.instanceId}`);
  }

  confirmUser(username: string, password: string) {
    const user = this.users.find(
      (user) =>
        user.getUsername() === username && user.getPassword() === password
    );

    this.logged = user !== undefined;
  }

  isLogged(): boolean {
    return this.logged;
  }

  logout() {
    this.logged = false;
  }
}
