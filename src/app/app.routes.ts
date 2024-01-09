import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: '', component: WatchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'panier', component: PanierComponent },
];
export class AppRoutingModule { }
