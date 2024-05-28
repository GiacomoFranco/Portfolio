export interface BrevoTemplateParameters {
  name: string;
  email: string;
  message: string;
}

export interface BrevoBody {
  sender: {};
  to: [{}];
  subject: string;
  templateId: number | string;
  params: any;
}
