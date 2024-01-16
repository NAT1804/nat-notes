import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FireMessagingService } from '@services/fire-messaging/fire-messaging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nat-notes';
  private readonly fireMessagingService = inject(FireMessagingService);

  ngOnInit(): void {
    this.fireMessagingService.requestPermission();
    this.fireMessagingService.listen();
  }
}
