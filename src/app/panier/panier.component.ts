import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MatCardModule, CommonModule],
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
}
