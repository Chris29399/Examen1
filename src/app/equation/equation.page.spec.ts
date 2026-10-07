import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquationPage } from './equation.page';

describe('EquationPage', () => {
  let component: EquationPage;
  let fixture: ComponentFixture<EquationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
