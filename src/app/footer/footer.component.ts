import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="footer">
      <p>© 2024 Nadj Watch. Tous droits réservés.</p>
      <p>
        <a href="#">Politique de confidentialité</a> |
        <a href="#">Conditions d'utilisation</a>
      </p>
    </div>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
