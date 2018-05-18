import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeventsComponent } from './cevents.component';

describe('CeventsComponent', () => {
  let component: CeventsComponent;
  let fixture: ComponentFixture<CeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
