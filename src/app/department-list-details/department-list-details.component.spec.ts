import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListDetailsComponent } from './department-list-details.component';

describe('DepartmentListDetailsComponent', () => {
  let component: DepartmentListDetailsComponent;
  let fixture: ComponentFixture<DepartmentListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentListDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
