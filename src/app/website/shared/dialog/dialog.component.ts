import { Component, Input } from '@angular/core';
import { DialogService } from '@app/website/services/dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  template: `
    <div class="section-container">
      <span
        class="dialog"
        [style.backgroundColor]="error ? '#fe9e9e' : 'var(--main-green)'"
      >
        @if (error) {
        <div class="message">
          <img src="/assets/icons/error-alert.svg" alt="Alerta de error" />
          <p>
            El sitio presentó un error al enviar el mensaje, contáctame
            e informame sobre el error <b>{{ error }}</b>
          </p>
        </div>
        } @else {
        <div class="message">
          <img src="/assets/icons/check-alert.svg" alt="Correo enviado" />
          <p>
            Tu mensaje se ha enviado con éxito, pronto nos comunicaremos contigo
          </p>
        </div>
        }
        <img
          class="close-button"
          src="/assets/icons/close.svg"
          alt="Cerrar alerta"
          (click)="closeDialog()"
        />
      </span>
    </div>
  `,
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input('errorCode') error: string | number;

  constructor(private dialogService: DialogService) {}

  closeDialog() {
    this.dialogService.closeDialog();
  }
}
