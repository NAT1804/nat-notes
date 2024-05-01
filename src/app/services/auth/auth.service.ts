import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage/storage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly fireAuth = inject(Auth);
  private readonly router = inject(Router);
  private readonly storageService = inject(StorageService);

  // private isLoggedInSub: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // public isLoggedIn$: Observable<boolean> = this.isLoggedInSub.asObservable();

  // public isLoggedIn() {
  //   return this.isLoggedInSub.getValue();
  // }

  // private tokenSub: BehaviorSubject<string> = new BehaviorSubject('');

  // public token$: Observable<string> = this.tokenSub.asObservable();

  // private userSub: BehaviorSubject<any> = new BehaviorSubject(null);

  // public user$: Observable<User> = this.userSub.asObservable();

  async signInWithGoogle(): Promise<void> {
    try {
      const result = await signInWithPopup(
        this.fireAuth,
        new GoogleAuthProvider()
      );
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        if (token) {
          this.storageService.saveToken(token);
        }
        // The signed-in user info.
        const user = result.user;
        // this.userSub.next(user);

        this.storageService.saveRefreshToken(data.refresh_token);
        this.storageService.saveTokenType(data.token_type);
        this.storageService.saveTokenExpiresIn(data.expires_in);

        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential_1 = GoogleAuthProvider.credentialFromError(error);
    }
  }
}
