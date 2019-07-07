import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtoMiddleComponent } from './lto-middle.component';

describe('LtoMiddleComponent', () => {
  let component: LtoMiddleComponent;
  let fixture: ComponentFixture<LtoMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtoMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtoMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
