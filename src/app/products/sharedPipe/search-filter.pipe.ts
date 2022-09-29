import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], filterstring: string, propName: string): any[] {
    const result: any = []
    if (!value || filterstring == "" || propName == "") {
      return value
    }
    value.forEach((item: any) => {
      if (item[propName].trim().toLowerCase().includes(filterstring)) {
        result.push(item)
      }
    })
    return result
  }

}
