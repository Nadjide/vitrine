import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MatCardModule, CommonModule,MatButtonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css',
})
export class PanierComponent implements OnInit {
  watches: any[] = [];

  constructor(private watchService: WatchService) {}

  ngOnInit(): void {
    this.watches = JSON.parse(localStorage.getItem('panier')!);
    console.log(this.watches);
  }

  removeWatch(watch: any): void {
  let found = this.watches.find((item: any) => item.id === watch.id);
  if (found) {
    found.quantity--;
    if (found.quantity === 0) {
      this.watches = this.watches.filter((w) => w.id !== watch.id);
    }
  }
  localStorage.setItem('panier', JSON.stringify(this.watches));
}

  getTotal(): number {
  return this.watches.reduce((acc, watch) => acc + watch.price * watch.quantity, 0);
}
}
