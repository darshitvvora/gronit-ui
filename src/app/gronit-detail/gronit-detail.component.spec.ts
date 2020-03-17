import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GronitDetailComponent } from './gronit-detail.component';

describe('GronitDetailComponent', () => {
  let component: GronitDetailComponent;
  let fixture: ComponentFixture<GronitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GronitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GronitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
