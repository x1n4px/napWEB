import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhumduangComponent } from './phumduang.component';

describe('PhumduangComponent', () => {
  let component: PhumduangComponent;
  let fixture: ComponentFixture<PhumduangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhumduangComponent]
    });
    fixture = TestBed.createComponent(PhumduangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
