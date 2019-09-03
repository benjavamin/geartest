import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwComponentComponent } from './ww-component.component';

describe('WwComponentComponent', () => {
  let component: WwComponentComponent;
  let fixture: ComponentFixture<WwComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
