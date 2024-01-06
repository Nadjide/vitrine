import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="logo">Nadj Watch</div>
        <ul class="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Montres</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="cart">
          <a href="#">Panier</a>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
