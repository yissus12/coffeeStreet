import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4 } from './s4';

describe('S4', () => {
  let component: S4;
  let fixture: ComponentFixture<S4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
