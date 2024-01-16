import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="logo">Nadj Watch</div>
        <ul class="nav-links">
          <li><a routerLink="/">Accueil</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
        <div class="cart">
          <div class="panier-container">
            <a class="panier-link" routerLink="/panier">Panier</a>
            <span class="cart-item-count" *ngIf="cartItemCount > 0">{{
              cartItemCount
            }}</span>
          </div>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cartItemCount = 0;

  ngOnInit(): void {
    this.updateCartItemCount();
  }

  updateCartItemCount(): void {
    let cart = JSON.parse(localStorage.getItem('panier')!) || [];
    this.cartItemCount = cart.reduce(
      (count: any, item: { quantity: any }) => count + item.quantity,
      0
    );
  }
}
