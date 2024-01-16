import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';

const components = [HeaderComponent, FooterComponent];

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, ...components],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
