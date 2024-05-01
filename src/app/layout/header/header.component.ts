import { Component, inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzAvatarModule, NzBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      console.log(user);
    });
  }
}
