import { FormGroup } from "@angular/forms";

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function patchArrayValue(controlNames: string[], form: FormGroup, values: any) {
  controlNames.forEach((c) => {
    form.controls[c].patchValue(values[c].map(v => v.id));
  })
}
