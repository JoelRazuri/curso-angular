import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
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
  
  // Ejemplo para suscripción
  tipoDni: string = 'DNI';

  // Usuario de ejemplo para setear valores
  // userActive: any = {
  //   name: 'Joel',
  //   apellido: 'Rázuri',
  //   dni: '41558273'
  // };

  constructor(private form: FormBuilder) {
    this.formContact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      tipoDni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  // Tambien se puede incluir los Validators fuera del constructor, por si queremos que en alguna 
  // parte de la app se muestre seteado o no. Eso va a depender de la logica de negocio  
  // ngOnInit(): void {
    // this.formContact.get('name')?.setValue(this.userActive.name);
    // this.formContact.get('name')?.disable();
    // Con esta lina de codigo podemos setear varios campos a la vez.
    // this.formContact.patchValue({
    //   name: this.userActive.name,
    //   apellido: this.userActive.apellido,
    //   dni: this.userActive.dni,
    // })
    // Con el metodo disable(), si o si hay que ir uno por uno :C
    // this.formContact.get('apellido')?.disable();
    // this.formContact.get('dni')?.disable();
  // }


  // Suscripciones
  ngOnInit(): void {
    this.formContact.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
    })
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }


  enviar() {
    console.log(this.formContact);
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formContact.get(controlName)?.hasError(errorType) && this.formContact.get(controlName)?.touched;
  }
}
