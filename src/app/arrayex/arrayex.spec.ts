import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrayex } from './arrayex';

describe('Arrayex', () => {
  let component: Arrayex;
  let fixture: ComponentFixture<Arrayex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arrayex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrayex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
