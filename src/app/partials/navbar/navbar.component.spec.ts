import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown menu', () => {
    expect(component.dropdownOpen).toBeFalse();

    const userIcon = fixture.debugElement.query(By.css('.user-icon'));
    userIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.dropdownOpen).toBeTrue();

    userIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.dropdownOpen).toBeFalse();
  });

  it('should call viewProfile method when Ver Perfil is clicked', () => {
    spyOn(component, 'viewProfile');

    component.dropdownOpen = true;
    fixture.detectChanges();

    const viewProfileLink = fixture.debugElement.query(
      By.css('.dropdown-menu a:first-child')
    );
    viewProfileLink.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.viewProfile).toHaveBeenCalled();
  });

  it('should call editAccount method when Editar Cuenta is clicked', () => {
    spyOn(component, 'editAccount');

    component.dropdownOpen = true;
    fixture.detectChanges();

    const editAccountLink = fixture.debugElement.query(
      By.css('.dropdown-menu a:nth-child(2)')
    );
    editAccountLink.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.editAccount).toHaveBeenCalled();
  });

  it('should call deleteAccount method when Eliminar Cuenta is clicked', () => {
    spyOn(component, 'deleteAccount');

    component.dropdownOpen = true;
    fixture.detectChanges();

    const deleteAccountLink = fixture.debugElement.query(
      By.css('.dropdown-menu a:nth-child(3)')
    );
    deleteAccountLink.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.deleteAccount).toHaveBeenCalled();
  });
});
