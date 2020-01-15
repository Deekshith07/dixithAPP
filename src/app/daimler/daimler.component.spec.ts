import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaimlerComponent } from './daimler.component';

describe('DaimlerComponent', () => {
  let component: DaimlerComponent;
  let fixture: ComponentFixture<DaimlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaimlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaimlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
