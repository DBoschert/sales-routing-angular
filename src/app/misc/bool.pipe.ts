import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  // transform(bool: boolean): string {
  //   return bool ? "OUI" : "NON";
  // }

  transform(bool: boolean, locale: string = "en"): string {
    if(locale === 'fr')
    return bool ? "OUI" : "NON";
  return bool ? "YES" : "NO";
}

}
