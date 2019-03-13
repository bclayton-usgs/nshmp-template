import { Component, OnInit, Input } from '@angular/core';
import { FormSlider } from './form-slider.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nshmp-template-form-slider',
  templateUrl: './form-slider.component.html',
  styleUrls: ['./form-slider.component.scss']
})
export class FormSliderComponent implements OnInit {

  @Input() form: FormSlider;

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
