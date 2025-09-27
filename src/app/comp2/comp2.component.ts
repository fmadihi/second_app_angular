import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// انتقال بین دو کامپوننت
// در کامپوننت ها سرویس را صدا میزنیم
//  و بعد در رویداد آن را پاس می دهیم
// this.dataService.dataEmmitter.subscribe((val) => {
//   this.title=val
// });

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
})
export class Comp2Component implements OnInit {
  title: string = 'nothing';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.dataEmmitter.subscribe((val) => {
      this.title = val;
    });
  }
}
