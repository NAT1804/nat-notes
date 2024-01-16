import { Component, inject } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AuthService } from '@services/auth/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);

  loginWithGoogle() {
    return this.authService.signInWithGoogle();
  }
}
