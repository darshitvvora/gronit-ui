import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GronitLinkRendererComponent } from './gronit-link-renderer.component';

describe('GronitLinkRendererComponent', () => {
  let component: GronitLinkRendererComponent;
  let fixture: ComponentFixture<GronitLinkRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GronitLinkRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GronitLinkRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
