import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{
  @Input() tipoDni: string = 'DNI';
  formDni: FormGroup;


  constructor(private form: FormBuilder) {
    this.formDni = this.form.group({
      dni: ['', Validators.required]
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoDni'].currentValue);
  }


  hasErrors(controlName: string, errorType: string) {
    return this.formDni.get(controlName)?.hasError(errorType) && this.formDni.get(controlName)?.touched;
  }
}
