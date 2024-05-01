import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { FireMessagingService } from '@services/fire-messaging/fire-messaging.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly fireMessagingService = inject(FireMessagingService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      console.log(user);
    });

    this.fireMessagingService.requestPermission();
    this.fireMessagingService.listen();
  }
}
