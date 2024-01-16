import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { PanierComponent } from './panier/panier.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: WatchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'watch-details/:id', component: WatchDetailsComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
