import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SivarComponent } from './sivar.component';

describe('SivarComponent', () => {
  let component: SivarComponent;
  let fixture: ComponentFixture<SivarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SivarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
