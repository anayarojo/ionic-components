import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any[], text: string, column: string): any[] {

    if (data === null || text === '') {
      return data;
    }

    text = text.toLocaleLowerCase();

    return data.filter((item) => {
        return item[column]
        .toLowerCase()
        .includes(text);
    });
  }

}
