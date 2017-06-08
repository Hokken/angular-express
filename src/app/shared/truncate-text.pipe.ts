import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: any, l?: any): any {

  	if(value===null || value === undefined){
      value="";
    }

    if(value.length>l){
      return value.substr(0,l)+"...";
    }

    return value

  }
}
