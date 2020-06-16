import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCartComponent } from './recap-cart.component';

describe('RecapCartComponent', () => {
  let component: RecapCartComponent;
  let fixture: ComponentFixture<RecapCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
