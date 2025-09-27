import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

// انتقال بین دو کامپوننت
// در کامپوننت ها سرویس را صدا میزنیم
//  و بعد در رویداد آن را پاس می دهیم
// this.dataService.useDataEmmiter(this.inputValue)

@Component({
  selector: 'app-comp1',
  imports: [FormsModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  inputValue: any = '';
  constructor(private dataService: DataService) {}

  onBtnClick() {
    this.dataService.useDataEmmiter(this.inputValue);
  }
}
