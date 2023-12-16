import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartSvgComponent } from './heart-svg.component';

describe('HeartSvgComponent', () => {
  let component: HeartSvgComponent;
  let fixture: ComponentFixture<HeartSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartSvgComponent]
    });
    fixture = TestBed.createComponent(HeartSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
