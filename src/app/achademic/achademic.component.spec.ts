import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchademicComponent } from './achademic.component';

describe('AchademicComponent', () => {
  let component: AchademicComponent;
  let fixture: ComponentFixture<AchademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchademicComponent]
    });
    fixture = TestBed.createComponent(AchademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
