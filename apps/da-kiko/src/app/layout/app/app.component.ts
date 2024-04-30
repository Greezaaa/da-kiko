import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutMainComponent } from '../main/main.component';
import { LayoutFooterComponent } from '../footer/footer.component';
import { LayoutHeaderComponent } from '../header/header.component';
@Component({
  standalone: true,
  imports: [RouterModule, LayoutHeaderComponent, LayoutMainComponent, LayoutFooterComponent],
  selector: 'kiko-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {}
