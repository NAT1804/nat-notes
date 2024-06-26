import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  REFRESH_TOKEN_KEY,
  TOKEN_EXPIRES_IN,
  TOKEN_KEY,
  TOKEN_TYPE,
  // USER_KEY,
} from '@constants/index';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private isLoggedInSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject$.asObservable();

  constructor() {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      this.isLoggedInSubject$.next(true);
    } else {
      this.isLoggedInSubject$.next(false);
    }
  }

  clean(): void {
    window.localStorage.clear();
    this.isLoggedInSubject$.next(false);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);

    this.isLoggedInSubject$.next(true);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public saveTokenType(type: string): void {
    window.localStorage.removeItem(TOKEN_TYPE);
    window.localStorage.setItem(TOKEN_TYPE, type);
  }

  public getTokenType(): string | null {
    return window.localStorage.getItem(TOKEN_TYPE);
  }

  public saveTokenExpiresIn(expiresIn: string): void {
    window.localStorage.removeItem(TOKEN_EXPIRES_IN);
    window.localStorage.setItem(TOKEN_EXPIRES_IN, expiresIn);
  }

  public getTokenExpiresIn(): string | null {
    return window.localStorage.getItem(TOKEN_EXPIRES_IN);
  }

  // public saveUser(user: any): void {
  //   window.localStorage.removeItem(USER_KEY);
  //   window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  //   this.isLoggedInSubject$.next(true);
  // }

  // public getUser(): any {
  //   const user = window.localStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }

  //   return {};
  // }

  public isLoggedIn() {
    return this.isLoggedInSubject$.getValue();
  }
}
