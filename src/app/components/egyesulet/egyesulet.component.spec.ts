import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyesuletComponent } from './egyesulet.component';

describe('EgyesuletComponent', () => {
  let component: EgyesuletComponent;
  let fixture: ComponentFixture<EgyesuletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgyesuletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyesuletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
