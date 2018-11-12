import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListCircuitsComponent} from './list-circuits.component';

describe('ListCircuitsComponent', () => {
  let component: ListCircuitsComponent;
  let fixture: ComponentFixture<ListCircuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCircuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
