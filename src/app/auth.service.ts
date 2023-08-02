import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private loggedInUser: any = null;

  constructor() { }

  login(username: string, password: string): boolean {
    
    if (username !== '' && password !== '') {
      this.isLoggedIn = true;
      this.loggedInUser = { username: username, name: 'Nome Utente', surname: 'Cognome Utente' };
      return true;
    } else {
      return false;
    }
  }

  register(userData: any): boolean {
    
    
    if (
      userData.username !== '' &&
      userData.password !== '' &&
      userData.name !== '' &&
      userData.surname !== '' &&
      userData.gender !== '' &&
      userData.profileImage !== '' &&
      userData.bio !== ''
    ) {
      this.isLoggedIn = true;
      this.loggedInUser = userData;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}
