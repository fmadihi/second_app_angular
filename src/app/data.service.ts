import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// این برای انتقال اطلاعات بین دو کامپوننت استفاده می شود
// برای ارسال اطلاعات دو راه وجود دارد که یکی همین کامنت شده است
// و دیگری استفاده از 
// subject

// به جای emit از next استفاده میکنیم
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // dataEmmitter = new EventEmitter<string>();

  // useDataEmmiter(data: string) {
  //   this.dataEmmitter.emit(data);
  // }

  dataEmmitter = new Subject<string>();

  useDataEmmiter(data: string) {
    this.dataEmmitter.next(data);
  }

}
