import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiLibComponent } from './ng-ui-lib.component';

describe('NgUiLibComponent', () => {
  let component: NgUiLibComponent;
  let fixture: ComponentFixture<NgUiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
