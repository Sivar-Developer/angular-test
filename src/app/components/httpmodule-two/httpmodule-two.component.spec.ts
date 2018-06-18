import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpmoduleTwoComponent } from './httpmodule-two.component';

describe('HttpmoduleTwoComponent', () => {
  let component: HttpmoduleTwoComponent;
  let fixture: ComponentFixture<HttpmoduleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpmoduleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpmoduleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
