import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dias } from './dias';

describe('Dias', () => {
  let component: Dias;
  let fixture: ComponentFixture<Dias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
