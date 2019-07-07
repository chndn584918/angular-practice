import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerFunpassComponent } from './summer-funpass.component';

describe('SummerFunpassComponent', () => {
  let component: SummerFunpassComponent;
  let fixture: ComponentFixture<SummerFunpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerFunpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerFunpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
