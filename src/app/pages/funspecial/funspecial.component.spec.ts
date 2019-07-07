import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunspecialComponent } from './funspecial.component';

describe('FunspecialComponent', () => {
  let component: FunspecialComponent;
  let fixture: ComponentFixture<FunspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
