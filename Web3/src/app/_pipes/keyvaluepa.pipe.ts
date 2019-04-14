import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvaluepa'
})
export class KeyvaluepaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    console.log(Object.keys(value));
    for (let key in value) { keys.push({ key: key, value: value[key] }); }
    return keys;
  }

}
