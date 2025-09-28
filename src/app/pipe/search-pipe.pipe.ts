import { Pipe, PipeTransform } from '@angular/core';
// جستجو با pipe
//  میتونیم این رو به در html
//  به اون المانی که حلقه زده شدم داد تا فیلتر را بزند

// میتوانیم از این pipe
// هر جا که خواستیم استفاده کنیم چون داریم مقادیر مختلف ره به آن میدهیم
@Pipe({
  name: 'searchPipe',
  pure:false
})
export class SearchPipePipe implements PipeTransform {
  transform(value: any, ...arg: string[]): any {
    const searchText = arg[0];
    const serachPara = arg[1];
    const para3 = arg[2];
    // شرط یا دوم را وارد میکنیم و تا وقتی صفحه لود میشود دیتا روی صفحه باشد
    if (value.length === 0 || searchText === '') {
      return value;
    }
    const result = [];
    for (const item of value) {
      if (item[serachPara].toLowerCase().startsWith(searchText)) {
        result.push(item);
      }
    }
    return result;
  }
}
