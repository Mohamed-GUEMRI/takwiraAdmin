import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODListComponent } from './od-list.component';

describe('ODListComponent', () => {
  let component: ODListComponent;
  let fixture: ComponentFixture<ODListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ODListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
