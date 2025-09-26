import { Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListDetailsComponent } from './department-list-details/department-list-details.component';
import { DescriptionComponent } from './department-list-details/description/description.component';
import { TutorialComponent } from './department-list-details/tutorial/tutorial.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'/department-list',
    pathMatch:'full'
  },
  {
    path: 'department-list',
    component: DepartmentListComponent,
  },
  {
    path: 'department-list/:id',
    component: DepartmentListDetailsComponent,
    children:[
        {
            path:'description',
            component:DescriptionComponent
        },
         {
            path:'tutorial',
            component:TutorialComponent
        }
    ]
  },
  {
    path: 'employment',
    component: EmploymentListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
