import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpDetailListComponent } from './pp-detail-list.component';

describe('PpDetailListComponent', () => {
  let component: PpDetailListComponent;
  let fixture: ComponentFixture<PpDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
