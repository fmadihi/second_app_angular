import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-list-details',
  imports: [RouterOutlet],
  templateUrl: './department-list-details.component.html',
  styleUrl: './department-list-details.component.css',
})
export class DepartmentListDetailsComponent implements OnInit {
  deparIdd: number = 0;
  deparId: number = 0;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // در اینجا استفاده از راه زیر برای زمانی خوب است که ما فقط میخواهیم
    // دیتایی را از ادرس بار بگیریم و اددرس بار فرار نیست به روز رسانی شود
    let idd = this.activeRoute.snapshot.paramMap.get('id');
    this.deparIdd = parseInt(idd!);

    // اگر بخواهمی تغییری در آدرس بدهیم باید از راه زیر برویم
    this.activeRoute.paramMap.subscribe((para: ParamMap) => {
      let id = parseInt(para.get('id')!);
      this.deparId = id;
    });
  }

  next() {
    // this.router.navigate(['/department', this.deparId + 1]);

    // استفاده relative navigation
    // با استفاده از این هر تغییری که در فایل rout
    // داده شود باعث خراب شدن پروژه نمیشه
    this.router.navigate(['../',this.deparId + 1],{relativeTo:this.activeRoute})
  }

  previose() {
    // this.router.navigate(['/department', this.deparId - 1]);

    // استفاده relative navigation
    // با استفاده از این هر تغییری که در فایل rout
    // داده شود باعث خراب شدن پروژه نمیشه
    this.router.navigate(['../',this.deparId - 1],{relativeTo:this.activeRoute})
  }
  backBtn(){
    // تعریف optional pararmeter
    // با استفاده از این میفهمیم که ار کدام صفحه به عقب برگشتیم
    // this.router.navigate(['/department',{id:this.deparId}])

    // استفاده relative navigation
    // با استفاده از این هر تغییری که در فایل rout
    // داده شود باعث خراب شدن پروژه نمیشه
    this.router.navigate(['../',{id:this.deparId}],{relativeTo:this.activeRoute})

  }

  goDescription(){
    this.router.navigate(['description'],{relativeTo:this.activeRoute})
  }
  goTutorial(){
    this.router.navigate(['tutorial'],{relativeTo:this.activeRoute})
  }
}
