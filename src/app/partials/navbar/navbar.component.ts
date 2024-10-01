import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el Router para la navegación

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Método para navegar a la pantalla de Ver Perfil (Sobre Mí)
  viewProfile() {
    this.router.navigate(['/sobre-mi']);
  }

  // Método para navegar a la pantalla de Editar Cuenta (Sobre Mí también, con opción de edición)
  editAccount() {
    this.router.navigate(['/sobre-mi'], { queryParams: { editMode: true } });
  }

  // Método de ejemplo para eliminar la cuenta
  deleteAccount() {
    // Lógica de eliminación de cuenta
    console.log('Cuenta eliminada');
  }
}

