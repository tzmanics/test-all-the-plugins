import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgeezComponent } from './svgeez.component';

describe('SvgeezComponent', () => {
  let component: SvgeezComponent;
  let fixture: ComponentFixture<SvgeezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgeezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgeezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
