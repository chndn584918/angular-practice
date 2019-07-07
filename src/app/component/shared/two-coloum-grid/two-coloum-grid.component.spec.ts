import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColoumGridComponent } from './two-coloum-grid.component';

describe('TwoColoumGridComponent', () => {
  let component: TwoColoumGridComponent;
  let fixture: ComponentFixture<TwoColoumGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColoumGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColoumGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
