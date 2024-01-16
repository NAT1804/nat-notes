import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly fireAuth = inject(Auth);
  private readonly router = inject(Router);

  private isLoggedInSub: BehaviorSubject<boolean> = new BehaviorSubject(false);

  protected isLoggedIn$: Observable<boolean> =
    this.isLoggedInSub.asObservable();

  public isLoggedIn() {
    return this.isLoggedInSub.getValue();
  }

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
        // The signed-in user info.
        const user = result.user;

        this.isLoggedInSub.next(true);
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
