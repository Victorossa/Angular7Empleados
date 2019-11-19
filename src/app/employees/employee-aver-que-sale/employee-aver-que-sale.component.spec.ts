import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAverQueSaleComponent } from './employee-aver-que-sale.component';

describe('EmployeeAverQueSaleComponent', () => {
  let component: EmployeeAverQueSaleComponent;
  let fixture: ComponentFixture<EmployeeAverQueSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAverQueSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAverQueSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
