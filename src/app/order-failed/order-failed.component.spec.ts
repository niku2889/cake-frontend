import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFailedComponent } from './order-failed.component';

describe('OrderFailedComponent', () => {
  let component: OrderFailedComponent;
  let fixture: ComponentFixture<OrderFailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFailedComponent]
    });
    fixture = TestBed.createComponent(OrderFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
