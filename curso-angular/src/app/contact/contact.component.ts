import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Formulario tipo plantilla
  // public user: any = {
  //   name: '',
  //   email: ''
  // }

  // enviar() {
  //   console.log(this.user);
  // }

  // Formulario tipo reactivo
  formContact: FormGroup;

  constructor(private form: FormBuilder) {
    this.formContact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  enviar() {
    console.log(this.formContact);
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formContact.get(controlName)?.hasError(errorType) && this.formContact.get(controlName)?.touched;
  }
}
