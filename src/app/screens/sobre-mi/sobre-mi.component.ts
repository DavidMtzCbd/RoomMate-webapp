import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {

  public user:any={}

  userForm: FormGroup;
  editMode = {
    name: false,
    email: false,
    username: false,
    password: false,
    address: false,
    phone: false
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }

  toggleEdit(field: string) {
    this.editMode[field] = !this.editMode[field];
    if (!this.editMode[field]) {
      // Simulación de guardar los datos
      console.log('Datos actualizados:', this.userForm.value);
    }
  }

  onInputChange(event: any, field: string) {
    this.userForm.patchValue({
      [field]: event.target.value
    });
  }
}
