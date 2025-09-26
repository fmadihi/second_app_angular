import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DepartmentListDetailsComponent } from './department-list-details/department-list-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,DepartmentListDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second_App_Routing';
}
