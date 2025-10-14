import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2 } from './s2';

describe('S2', () => {
  let component: S2;
  let fixture: ComponentFixture<S2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
