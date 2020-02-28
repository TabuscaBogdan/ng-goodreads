import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(items:Array<any>,searchTerm:string): unknown {
    if(!searchTerm) return items;
    return items.filter( item => item.originalTitle.includes(searchTerm));
  }

}
