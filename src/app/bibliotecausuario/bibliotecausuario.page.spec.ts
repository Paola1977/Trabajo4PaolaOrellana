import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibliotecausuarioPage } from './bibliotecausuario.page';

describe('BibliotecausuarioPage', () => {
  let component: BibliotecausuarioPage;
  let fixture: ComponentFixture<BibliotecausuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
