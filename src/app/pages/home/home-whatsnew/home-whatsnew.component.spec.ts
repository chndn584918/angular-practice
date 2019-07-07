import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatsnewComponent } from './home-whatsnew.component';

describe('HomeWhatsnewComponent', () => {
  let component: HomeWhatsnewComponent;
  let fixture: ComponentFixture<HomeWhatsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWhatsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhatsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
