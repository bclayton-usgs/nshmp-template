import { Component, OnInit, Input } from '@angular/core';
import { ControlPanelService } from './control-panel.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormButtonToggle, FormInput, FormSelect, FormSlider } from 'projects/nshmp-ng-template/src/public_api';
import { FormField } from 'projects/nshmp-ng-template/src/lib/form-field/form-field.model';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() isProductionMode = true;

  buttonToggle: FormButtonToggle = {
    buttons: [
      {label: 'Button 1', value: 'btn1'},
      {label: 'Button 2', value: 'btn2'}
    ],
    formClass: 'margin-y-2 grid-col-12',
    formControlName: 'buttonToggle',
    formType: 'button-toggle',
    label: 'Button Toggles'
  };

  checkbox: FormField = {
    formClass: 'margin-y-2 grid-col-12',
    formControlName: 'checkbox',
    formType: 'checkbox',
    label: 'Checkbox'
  };

  input: FormInput = {
    formControlName: 'input',
    formClass: 'margin-y-2 grid-col-12',
    formType: 'input',
    label: 'Input',
    type: 'number'
  };

  select: FormSelect = {
    formControlName: 'select',
    formClass: 'margin-y-2 grid-col-12',
    formType: 'select',
    label: 'Select Menu',
    options: [
      {label: 'Option 1', value: 'value1'},
      {label: 'Option 2', value: 'value2'}
    ]
  };

  selectOptGroup: FormSelect = {
    formControlName: 'select',
    formClass: 'margin-y-2 grid-col-12',
    formType: 'select',
    label: 'Select Menu with Groups',
    optGroup: [
      {
        label: 'Group 1',
        options: [
          {label: 'Option 1', value: 'value1'},
          {label: 'Option 2', value: 'value2'}
        ]
      },
      {
        label: 'Group 2',
        options: [
          {label: 'Option 1', value: 'value1'},
          {label: 'Option 2', value: 'value2'}
        ]
      }
    ]
  };

  slideToggle: FormField = {
    formControlName: 'slideToggle',
    formClass: 'margin-y-2 grid-col-12',
    formType: 'toggle',
    label: 'Slide Toggle'
  };

  slider: FormSlider = {
    formControlName: 'slider',
    formClass: 'margin-y-2 grid-col-12',
    formType: 'slider',
    label: 'Slider',
    thumbLabel: true
  };

  formFields = [
    this.buttonToggle,
    this.checkbox,
    this.input,
    this.select,
    this.selectOptGroup,
    this.slideToggle,
    this.slider
  ];

  formGroup: FormGroup = this.formBuilder.group({
    buttonToggle: [],
    checkbox: [],
    input: [],
    select: [],
    selectOptGroup: [],
    slideToggle: [],
    slider: []
  });

  constructor(
      private controlPanelService: ControlPanelService,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onToggle(isProductionMode: boolean): void {
    this.isProductionMode = isProductionMode;
    this.controlPanelService.modeToggleNext(isProductionMode);
  }

}
