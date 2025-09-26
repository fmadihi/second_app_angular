import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  imports: [NgForOf, NgClass],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  technologies = [
    {
      id: 1,
      name: 'html',
    },
    {
      id: 2,
      name: 'css',
    },
    {
      id: 3,
      name: 'javascript',
    },
    {
      id: 4,
      name: 'react',
    },
    {
      id: 5,
      name: 'Angular',
    },
  ];

  selectedId: number = 0;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  selectId(elem: any) {
    // this.router.navigate(['/department', elem]);
    this.router.navigate([elem],{relativeTo:this.activeRoute})
  }

  ngOnInit(): void {
    let id = parseInt(this.activeRoute.snapshot.paramMap.get('id')!);
    this.selectedId = id;
  }
// ین تابع اگر ترو باشد رنگ دکمه ای که از آن صفحه به عقب برگشتیم متفاوت میکند
  isSelected(id: number) {
    return this.selectedId === id;
  }
}
