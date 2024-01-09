import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  private watches: any[] = [];

  constructor() { }

  getWatchById(id: number): any {
    const watch = this.watches.find(watch => watch.id === id);
    console.log('Watch Details:', watch);
    return watch;
  }
}
