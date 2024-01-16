import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
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
    return this.watches.reduce(
      (acc, watch) => acc + watch.price * watch.quantity,
      0
    );
  }

  generatePDF(): void {
    let doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Récapitulatif de commande', 10, 20);

    doc.setFontSize(14);
    doc.text('Article', 10, 30);
    doc.text('Quantité', 70, 30);
    doc.text('Prix', 130, 30);

    this.watches.forEach((watch, index) => {
      let y = 40 + 10 * index;
      doc.text(watch.name, 10, y);
      doc.text(watch.quantity.toString(), 70, y);
      doc.text(`${watch.price}€`, 130, y);
    });

    doc.text(`Total: ${this.getTotal()}€`, 10, 50 + 10 * this.watches.length);

    doc.save('recapitulatif_commande.pdf');
  }

  confirmOrder(): void {
    this.generatePDF();
    alert('Merci pour votre commande !');
    this.watches = [];
    localStorage.removeItem('panier');
  }
}
