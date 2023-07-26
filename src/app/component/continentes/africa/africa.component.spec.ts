import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaComponent } from './africa.component';

describe('AfricaComponent', () => {
  let component: AfricaComponent;
  let fixture: ComponentFixture<AfricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricaComponent]
    });
    fixture = TestBed.createComponent(AfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
