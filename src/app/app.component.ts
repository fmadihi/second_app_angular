import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DepartmentListDetailsComponent } from './department-list-details/department-list-details.component';
import { filter, from, map, Observable, of } from 'rxjs';
import { Comp1Component } from './comp1/comp1.component';
import { DataService } from './data.service';
import { Comp2Component } from './comp2/comp2.component';
import { interval } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DepartmentListDetailsComponent,
    Comp1Component,
    Comp2Component,
    FormsModule,
    NgIf,
    NgForOf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService],
})
export class AppComponent implements OnInit {
  title = 'second_App_Routing';

  constructor(private dataService: DataService) {}
  // تعریف ابزرو ها - تا زمانی که آن را صدا نزنید اجرا نمیشود و اینکه به صورت استریم دیتا را بر میگرداند
  // میتوان دیتا ها از ای پی ای خارجی یا هر چیز دیگری باشد

  // مدیریت ارور و اتمام در  آبزرو
  // وقتی ارورو را بنویسیم متد های بعد از ارور اجرا نمیشودند همین برای کامپلیت هم صدق میکند
  // ارور ورودی میگیرد ولی کامپلیت نه
  // در oninit
  // هم نجوه صدا زدن آن مشخص شده است
  myObserve = new Observable((subscribe) => {
    console.log('Observable is start...');
    setTimeout(() => {
      subscribe.next('1');
    }, 1000);
    setTimeout(() => {
      subscribe.next('2');
    }, 2000);
    // setTimeout(() => {
    //   subscribe.error(new Error ('sth is wrong, plz try later...'))
    // }, 3000);
    setTimeout(() => {
      subscribe.next('4');
    }, 4000);
    setTimeout(() => {
      subscribe.complete();
    }, 5000);
  });

  array01: any = [2, 4, 6];
  array02: any = [1, 3, 5];

  // ofObserve = of(1, 2, 3);
  ofObserve = of(this.array02);
  fromObserve = from(this.array02);
  mapObserve = from(this.array02).pipe(
    map((val) => {
      return Number(val) * 5;
    }),
    filter((val) => {
      return Number(val) >= 10;
    })
  );

  ngOnInit(): void {
    // روش زیر هم خوانایی ندارد و هم دارد منسوخ می شود
    // و از روش زیر استفاده میکنیم
    // this.myObserve.subscribe(
    //   (val) => {
    //     console.log(val);
    //   },
    //   (err) => {
    //     alert(err.message);
    //   },
    //   () => {
    //     alert('welldone, complete');
    //   }
    // );

    //   this.myObserve.subscribe({
    //     next: (val)=>{ console.log(val);},
    //     error:(err)=>{alert(err.message);},
    //     complete:()=>{alert('welldone, complete');}
    // })

    // this.ofObserve.subscribe((val) => {
    //   console.log(val);
    // });

    this.ofObserve.subscribe({
      next: (val) => {
        console.log('array in ofObserve : ' + val);
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert('welldone, complete');
      },
    });

    this.fromObserve.subscribe({
      next: (val) => {
        console.log('array in fromObserve : ' + val);
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert('welldone, complete');
      },
    });

    this.mapObserve.subscribe({
      next: (val) => {
        console.log('map observe : ' + val);
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert('welldone, complete');
      },
    });
  }

  // استفاده از کتابخونه
  // rxjs ...> interval
  // استفاده از unsubscribe
  counterObserve = interval(1000);
  counterSub: any = '';
  subscribe() {
    this.counterSub = this.counterObserve.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
  }
  unsubscribe() {
    this.counterSub.unsubscribe();
  }

  // form handling
  // onSubmit(form: any) {
  //   console.log(form);
  // }

  // form handling with viewChild
  @ViewChild('f') fromValues: NgForm | null = null;
  onSubmit() {
    console.log(this.fromValues);
  }

  defaultValueSecretQuestion='wBorn'
  answer:string=''

  genders = ['male','female']
}
