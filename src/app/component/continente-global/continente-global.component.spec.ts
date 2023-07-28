import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinenteGlobalComponent } from './continente-global.component';

describe('ContinenteGlobalComponent', () => {
  let component: ContinenteGlobalComponent;
  let fixture: ComponentFixture<ContinenteGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinenteGlobalComponent]
    });
    fixture = TestBed.createComponent(ContinenteGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
