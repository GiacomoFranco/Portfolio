import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '@app/website/shared/directives/scroll-reveal.directive';
import { CheckboxInputComponent } from '@app/website/shared/form/checkbox-input/checkbox-input.component';
import { FieldErrorComponent } from '@app/website/shared/form/field-error/field-error.component';
import { FormComponent } from '@app/website/shared/form/form.component';
import { SubmitButtonComponent } from '@app/website/shared/form/submit-button/submit-button.component';
import { TextInputComponent } from '@app/website/shared/form/text-input/text-input.component';
import { TextareaInputComponent } from '@app/website/shared/form/textarea-input/textarea-input.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormComponent, TextInputComponent, TextareaInputComponent, CheckboxInputComponent, FieldErrorComponent, SubmitButtonComponent, ScrollRevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.form.get('message') as FormControl;
  }

  get terms(): FormControl {
    return this.form.get('terms') as FormControl;
  }
}
