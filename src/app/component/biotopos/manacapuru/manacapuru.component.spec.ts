import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManacapuruComponent } from './manacapuru.component';

describe('ManacapuruComponent', () => {
  let component: ManacapuruComponent;
  let fixture: ComponentFixture<ManacapuruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManacapuruComponent]
    });
    fixture = TestBed.createComponent(ManacapuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
