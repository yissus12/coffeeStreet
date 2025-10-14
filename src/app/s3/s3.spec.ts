import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3 } from './s3';

describe('S3', () => {
  let component: S3;
  let fixture: ComponentFixture<S3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
