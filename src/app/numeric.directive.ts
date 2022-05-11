import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';




export function numeric(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = control.value;
   if (typeof val==='string'){
    return {valur: {val: control.value}} 
  }else{
    return null;
  }
  };
}
@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {

  constructor() { }

}
