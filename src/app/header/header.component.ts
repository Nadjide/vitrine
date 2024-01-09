import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="logo">Nadj Watch</div>
        <ul class="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
        <div class="cart">
          <a href="/panier">Panier</a>
        </div>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
