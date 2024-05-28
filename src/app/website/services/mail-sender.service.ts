import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrevoBody, BrevoTemplateParameters } from '../interfaces/mail.interface';

@Injectable({
  providedIn: 'root',
})
export class MailSenderService {
  private readonly API_URL: string = import.meta.env['NG_APP_BREVO_API_URL'];
  private readonly BREVO__APIKEY: string = import.meta.env['NG_APP_BREVO_API_URL'];
  brevoHeaders = {
    'api-key': this.BREVO__APIKEY,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  params: BrevoTemplateParameters;
  body: BrevoBody;

  constructor(private http: HttpClient) {}

  sendMessage(message: any): any {
    this.params = {
      name: message.name,
      email: message.email,
      message: message.message,
    };

    this.body = {
      sender: { name: 'Francoder_', email: 'passiflora.freelance@gmail.com' },
      to: [{ email: 'passiflora.freelance@gmail.com', name: 'Santiago' }],
      subject: `🧙🏻‍♂️ ✨ | Francoder_, ${message.name} nos ha enviado un nuevo mensaje desde nuestro portafolio`,
      templateId: 4,
      params: this.params,
    };

    return this.http.post<any>(`${this.API_URL}`, this.body, {
      headers: this.brevoHeaders,
    });
  }
}
