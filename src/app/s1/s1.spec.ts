import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1 } from './s1';

describe('S1', () => {
  let component: S1;
  let fixture: ComponentFixture<S1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
