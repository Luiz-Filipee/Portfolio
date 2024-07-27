import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencyComponent } from './experiency.component';

describe('ExperiencyComponent', () => {
  let component: ExperiencyComponent;
  let fixture: ComponentFixture<ExperiencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencyComponent]
    });
    fixture = TestBed.createComponent(ExperiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
