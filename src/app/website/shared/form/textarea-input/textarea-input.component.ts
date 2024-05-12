import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-textarea-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="input-container">
      <textarea name="" id="" cols="30" rows="4" id="contact-message" [formControl]="control" required class="white-element" ></textarea>
      <label for="contact-message" class="white-element">Message</label>
      <div class="underline"></div>
    </div>
    <ng-content select="[error]"></ng-content>
  `,
  styleUrl: './textarea-input.component.scss',
})
export class TextareaInputComponent {
    @Input() control: FormControl = new FormControl();
}
