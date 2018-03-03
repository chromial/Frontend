import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRadioButtonComponent } from './reactive-radio-button.component';

describe('ReactiveRadioButtonComponent', () => {
  let component: ReactiveRadioButtonComponent;
  let fixture: ComponentFixture<ReactiveRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
