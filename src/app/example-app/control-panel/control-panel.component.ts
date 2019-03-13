import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';
import {
  FormField,
  FormButtonToggle,
  FormInput,
  FormSelect,
  FormSlider,
  FormCheckbox} from 'projects/nshmp-ng-template/src/public_api';

import { ControlPanelService } from './control-panel.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  buttonToggle: FormButtonToggle = {
    change: this.onToggle.bind(this),
    buttons: [
      {
        label: 'Production mode',
        checked: true,
        value: true
      },
      {
        label: 'Development mode',
        checked: false,
        value: false
      }
    ],
    formClass: 'margin-y-1 grid-col-12',
    formControlName: 'buttonToggle',
    formType: 'button-toggle',
    label: 'Production Mode Toggle'
  };

  checkbox: FormCheckbox = {
    formClass: 'margin-y-2 grid-col-12',
    formControlName: 'checkbox',
    formType: 'checkbox',
    label: 'Checkbox'
  };

  input: FormInput = {
    formControlName: 'input',
    formClass: 'margin-y-1 grid-col-12',
    formType: 'input',
    label: 'Input',
    type: 'number'
  };

  select: FormSelect = {
    formControlName: 'select',
    formClass: 'margin-y-1 grid-col-12',
    formType: 'select',
    label: 'Select Menu',
    options: [
      {label: 'Option 1', value: 'value1'},
      {label: 'Option 2', value: 'value2'}
    ]
  };

  selectOptGroup: FormSelect = {
    formControlName: 'select',
    formClass: 'margin-y-1 grid-col-12',
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
    formClass: 'margin-y-1 grid-col-12',
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
    dev: [],
    prod: [],
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

  onToggle(change: MatButtonToggleChange): void {
    this.controlPanelService.modeToggleNext(change.value);
  }

}
