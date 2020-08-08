import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinasComponent } from './minas.component';

describe('MinasComponent', () => {
  let component: MinasComponent;
  let fixture: ComponentFixture<MinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
