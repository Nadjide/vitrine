import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { HeaderComponent } from './header/header.component';
import { WatchComponent } from './watch/watch.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { WatchService } from './watch.service';

import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatCardModule,
    HeaderComponent,
    WatchComponent,
    SearchComponent,
    FooterComponent,
    ContactComponent,
    WatchDetailsComponent,
    RouterModule,
    PanierComponent,
    SortPipe,
    SearchPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vitrine';
}
