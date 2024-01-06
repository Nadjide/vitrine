import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';
  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
