import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotopoPageComponent } from './biotopo-page.component';

describe('BiotopoPageComponent', () => {
  let component: BiotopoPageComponent;
  let fixture: ComponentFixture<BiotopoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiotopoPageComponent]
    });
    fixture = TestBed.createComponent(BiotopoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
