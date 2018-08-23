import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertsearchComponent } from './propertsearch.component';

describe('PropertsearchComponent', () => {
  let component: PropertsearchComponent;
  let fixture: ComponentFixture<PropertsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
