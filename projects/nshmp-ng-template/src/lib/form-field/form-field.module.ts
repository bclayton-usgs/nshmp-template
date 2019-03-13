import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSliderModule,
  MatButtonToggleModule,
} from '@angular/material';

import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { FormToggleComponent } from './form-toggle/form-toggle.component';
import { FormButtonToggleComponent } from './form-button-toggle/form-button-toggle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    FormCheckboxComponent,
    FormInputComponent,
    FormSelectComponent,
    FormSliderComponent,
    FormToggleComponent,
    FormButtonToggleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonToggleModule
  ],
  exports: [
    FormFieldComponent
  ]
})
export class FormFieldModule { }
