import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apicall } from './apicall';

describe('Apicall', () => {
  let component: Apicall;
  let fixture: ComponentFixture<Apicall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apicall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apicall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
