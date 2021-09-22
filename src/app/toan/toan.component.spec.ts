import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToanComponent } from './toan.component';

describe('ToanComponent', () => {
  let component: ToanComponent;
  let fixture: ComponentFixture<ToanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
