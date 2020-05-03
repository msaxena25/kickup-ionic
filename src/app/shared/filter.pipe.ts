import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, property: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase().trim(); 
    return items.filter(it => {
      return (property ? it[property] : it).toLowerCase().trim().includes(searchText);
    });
  }
}