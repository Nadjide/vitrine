import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-watch-details',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './watch-details.component.html',
  styleUrl: './watch-details.component.css',
})
export class WatchDetailsComponent implements OnInit {
  watch: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (history.state.watch) {
      this.watch = history.state.watch;
    } else {
      this.router.navigate(['/']);
    }
  }
}
