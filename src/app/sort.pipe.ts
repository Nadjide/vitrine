import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {
  private isAscending = true;

  transform(array: any[], field: string): any[] {
    const sortedArray = array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return this.isAscending ? -1 : 1;
      } else if (a[field] > b[field]) {
        return this.isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.isAscending = !this.isAscending;
    return sortedArray;
  }
}

@Pipe({
  name: 'sortByDate',
  standalone: true,
  pure: false
})
export class SortByDatePipe implements PipeTransform {
  private isAscending = true;

  transform(array: any[]): any[] {
    const sortedArray = array.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return this.isAscending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

    this.isAscending = !this.isAscending;
    return sortedArray;
  }
}
