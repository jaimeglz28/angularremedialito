import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpartidasComponent } from './verpartidas.component';

describe('VerpartidasComponent', () => {
  let component: VerpartidasComponent;
  let fixture: ComponentFixture<VerpartidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerpartidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
