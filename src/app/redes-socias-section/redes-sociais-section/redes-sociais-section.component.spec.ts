import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisSectionComponent } from './redes-sociais-section.component';

describe('RedesSociaisSectionComponent', () => {
  let component: RedesSociaisSectionComponent;
  let fixture: ComponentFixture<RedesSociaisSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesSociaisSectionComponent]
    });
    fixture = TestBed.createComponent(RedesSociaisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
