import { Component, OnInit } from '@angular/core';
import { Watch } from './watch.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, SearchComponent],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css',
})
export class WatchComponent implements OnInit {
  watches: Watch[] = [
    {
      name: 'Rolex',
      price: 10000,
      image:
        'https://lemag.cresus.fr/wp-content/uploads/2023/06/56570-rolex-milgauss-3632opt-e1687955024296.jpg',
      date: new Date(2023, 6, 1),
      isFavorite: false,
    },
    {
      name: 'Omega',
      price: 5000,
      image:
        'https://i.ebayimg.com/00/s/MTYwMFgxNDg2/z/MAQAAOSw7YxkCLUt/$_1.JPG',
      date: new Date(2022, 3, 15),
      isFavorite: false,
    },
    {
      name: 'Hublot',
      price: 15000,
      image:
        'https://www.frojo.com/218596-home_default/montre-big-bang-chronograph-44-mm-acier-cadran-noir-bracelet-caoutchouc-noir.jpg',
      date: new Date(2023, 1, 10),
      isFavorite: false,
    },
    {
      name: 'Cartier',
      price: 8000,
      image: 'https://i.ebayimg.com/images/g/tWAAAOSwOEBlH0Lo/s-l1200.webp',
      date: new Date(2022, 11, 5),
      isFavorite: false,
    },
    {
      name: 'Tag Heuer',
      price: 6000,
      image:
        'https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dwb9b4d31b/images/sprites/Formula1/WAZ1118.BA0875/RTW_backUp.jpg',
      date: new Date(2022, 8, 20),
      isFavorite: false,
    },
    {
      name: 'Breitling',
      price: 9000,
      image:
        'https://www.breitling.com/media/image/2/gallery_square_700/asset-version-87be0b6013/ab0138211b1a1-navitimer-b01-chronograph-43-three-quarter.png',
      date: new Date(2023, 4, 30),
      isFavorite: false,
    },
    {
      name: 'Patek Philippe',
      price: 20000,
      image: 'https://pics.zeitauktion.com/2023/2300998_sw6_theme2_2k.jpg',
      date: new Date(2023, 2, 12),
      isFavorite: false,
    },
  ];
  filteredWatches = this.watches;
  constructor() {}

  ngOnInit(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      this.watches = this.watches.map((watch) => ({
        ...watch,
        isFavorite: favorites.includes(watch.name),
      }));
    }

    this.filteredWatches = this.watches;
  }

  toggleFavorite(watch: Watch): void {
    watch.isFavorite = !watch.isFavorite;
    const favorites = this.watches
      .filter((w) => w.isFavorite)
      .map((w) => w.name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  handleSearchEvent(searchTerm: string): void {
    this.filteredWatches = this.watches.filter((watch) =>
      watch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  sortNameAsc = true;
  sortDateAsc = true;

  sortByDate() {
    this.filteredWatches.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return this.sortDateAsc ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    this.sortDateAsc = !this.sortDateAsc;
  }

  // Tri par nom
  sortByName() {
    this.filteredWatches.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return this.sortNameAsc ? (nameA < nameB ? -1 : (nameA > nameB ? 1 : 0)) : (nameA > nameB ? -1 : (nameA < nameB ? 1 : 0));
    });
    this.sortNameAsc = !this.sortNameAsc;
  }
}
