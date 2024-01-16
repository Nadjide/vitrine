import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Watch } from '../watch/watch.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-watch-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './watch-details.component.html',
  styleUrl: './watch-details.component.css',
})
export class WatchDetailsComponent implements OnInit {
  watch: any;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (history.state.watch) {
      this.watch = history.state.watch;
    } else {
      this.router.navigate(['/']);
    }
  }

  addToCart(): void {
    let cart = JSON.parse(localStorage.getItem('panier')!) || [];
    let found = cart.find((item: any) => item.id === this.watch.id);
    if (found) {
      found.quantity++;
    } else {
      let watchWithQuantity = { ...this.watch, quantity: 1 };
      cart.push(watchWithQuantity);
    }
    localStorage.setItem('panier', JSON.stringify(cart));

    this.snackBar.open('Montre ajoutée au panier', 'Fermer', {
      duration: 5000,
    });
  }
}
