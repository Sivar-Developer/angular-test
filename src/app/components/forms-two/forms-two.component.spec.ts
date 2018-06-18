import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTwoComponent } from './forms-two.component';

describe('FormsTwoComponent', () => {
  let component: FormsTwoComponent;
  let fixture: ComponentFixture<FormsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
