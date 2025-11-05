import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fromulario } from './fromulario';

describe('Fromulario', () => {
  let component: Fromulario;
  let fixture: ComponentFixture<Fromulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fromulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fromulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
