import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantyComponent } from './garanty.component';

describe('GarantyComponent', () => {
  let component: GarantyComponent;
  let fixture: ComponentFixture<GarantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
