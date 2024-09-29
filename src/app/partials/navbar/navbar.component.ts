import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  viewProfile() {
    // Lógica para ver el perfil
    console.log('Ver Perfil');
  }

  editAccount() {
    // Lógica para editar la cuenta
    console.log('Editar Cuenta');
  }

  deleteAccount() {
    // Lógica para eliminar la cuenta
    console.log('Eliminar Cuenta');
  }
}
