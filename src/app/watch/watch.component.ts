import { Component, OnInit } from '@angular/core';
import { Watch } from './watch.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from '../search/search.component';
import { SearchPipe } from '../search.pipe';
import { SortPipe } from '../sort.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    SearchComponent,
    SearchPipe,
    SortPipe,
    FormsModule,
  ],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css',
})
export class WatchComponent implements OnInit {
  watches: Watch[] = [
    {
      id: 1,
      name: 'Rolex',
      description:
        'Fabricant suisse de montres de luxe réputé pour son prestige et sa précision.',
      price: 10000,
      image:
        'https://lemag.cresus.fr/wp-content/uploads/2023/06/56570-rolex-milgauss-3632opt-e1687955024296.jpg',
      date: new Date(2023, 6, 1),
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Omega',
      description:
        'Marque suisse de montres de luxe avec un riche héritage et des designs innovants.',
      price: 5000,
      image:
        'https://i.ebayimg.com/00/s/MTYwMFgxNDg2/z/MAQAAOSw7YxkCLUt/$_1.JPG',
      date: new Date(2022, 3, 15),
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Hublot',
      description:
        'Fabricant suisse de montres de luxe connu pour ses designs audacieux et distinctifs.',
      price: 15000,
      image:
        'https://www.frojo.com/218596-home_default/montre-big-bang-chronograph-44-mm-acier-cadran-noir-bracelet-caoutchouc-noir.jpg',
      date: new Date(2023, 1, 10),
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Cartier',
      description:
        'Fabricant français de montres et de bijoux de luxe avec une élégance intemporelle.',
      price: 8000,
      image: 'https://i.ebayimg.com/images/g/tWAAAOSwOEBlH0Lo/s-l1200.webp',
      date: new Date(2022, 11, 5),
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Tag Heuer',
      description:
        'Marque suisse de montres de luxe connue pour ses garde-temps sportifs et avant-gardistes.',
      price: 6000,
      image:
        'https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dwb9b4d31b/images/sprites/Formula1/WAZ1118.BA0875/RTW_backUp.jpg',
      date: new Date(2022, 8, 20),
      isFavorite: false,
    },
    {
      id: 6,
      name: 'Breitling',
      description:
        "Fabricant suisse de montres de luxe spécialisé dans les garde-temps inspirés de l'aviation.",
      price: 9000,
      image:
        'https://www.breitling.com/media/image/2/gallery_square_700/asset-version-87be0b6013/ab0138211b1a1-navitimer-b01-chronograph-43-three-quarter.png',
      date: new Date(2023, 4, 30),
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Patek Philippe',
      description:
        'Fabricant suisse de montres de luxe réputé pour son artisanat exquis.',
      price: 20000,
      image: 'https://pics.zeitauktion.com/2023/2300998_sw6_theme2_2k.jpg',
      date: new Date(2023, 2, 12),
      isFavorite: false,
    },
    {
      id: 8,
      name: 'IWC',
      description:
        "Marque suisse de montres de luxe axée sur l'ingénierie et l'innovation technique.",
      price: 7000,
      image:
        'https://www.iwc.com/content/dam/rcq/iwc/21/49/85/9/2149859.png.transform.global_image_480_2x.png',
      date: new Date(2022, 9, 7),
      isFavorite: false,
    },
    {
      id: 9,
      name: 'Audemars Piguet',
      description:
        'Fabricant suisse de montres de luxe connu pour ses garde-temps mécaniques complexes.',
      price: 12000,
      image:
        'https://www.blackvenomwatch.com/upload/images/Collection/Black_Collection/Audemars_Piguet/Royal_Oak/AP_15400_141/AP_15400_141.png',
      date: new Date(2023, 7, 25),
      isFavorite: false,
    },
    {
      id: 10,
      name: 'Jaeger-LeCoultre',
      description:
        "Fabricant suisse de montres de luxe avec une longue histoire d'innovation et d'artisanat.",
      price: 10000,
      image:
        'https://img.jaeger-lecoultre.com/product-slider-hero-mobile-3/9d6c27d4af2e7122bb1a3f18b907d581b3a205f7.jpg',
      date: new Date(2022, 10, 1),
      isFavorite: false,
    },
  ];
  searchTerm: string = '';
  currentSortField: string = '';
  isSortAscending: boolean = true;
  selectedWatch: any;

  constructor(private router: Router) {}

  showDetails(watch: any): void {
    this.router.navigate(['/watch-details', watch.id], { state: { watch } });
  }

  ngOnInit(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      this.watches = this.watches.map((watch) => ({
        ...watch,
        isFavorite: favorites.includes(watch.id),
      }));
    }
  }

  toggleFavorite(watch: Watch): void {
    watch.isFavorite = !watch.isFavorite;
    const favorites = this.watches.filter((w) => w.isFavorite).map((w) => w.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  sortByName(): void {
    this.currentSortField = 'name';
    this.isSortAscending = !this.isSortAscending;
    this.sortWatches();
  }

  sortByDate(): void {
    this.currentSortField = 'date';
    this.isSortAscending = !this.isSortAscending;
    this.sortWatches();
  }

  private sortWatches(): void {
    this.watches.sort((a: any, b: any) => {
      if (a[this.currentSortField] < b[this.currentSortField]) {
        return this.isSortAscending ? -1 : 1;
      } else if (a[this.currentSortField] > b[this.currentSortField]) {
        return this.isSortAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
