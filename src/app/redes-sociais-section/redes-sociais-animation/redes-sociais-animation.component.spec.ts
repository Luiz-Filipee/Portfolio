import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisAnimationComponent } from './redes-sociais-animation.component';

describe('RedesSociaisAnimationComponent', () => {
  let component: RedesSociaisAnimationComponent;
  let fixture: ComponentFixture<RedesSociaisAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesSociaisAnimationComponent]
    });
    fixture = TestBed.createComponent(RedesSociaisAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
