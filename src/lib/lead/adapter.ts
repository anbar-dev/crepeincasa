export interface LeadPayload {
  property: {
    comune: string;
    provincia: string;
    cap: string;
    tipologia: string;
    anno: string;
    piani: string;
  };
  observations: {
    dove: string;
    internoEsterno: string;
    orientamento: string;
    comparsa: string;
    cambiamenti: string;
    porteFinestre: string;
    pavimenti: string;
    lavori: string;
    infiltrazioni: string;
    note: string;
  };
  request: string;
  contact: {
    nome: string;
    email: string;
    telefono: string;
  };
  forwardingConsent: boolean;
}

export interface LeadAdapterResult {
  accepted: boolean;
  reference: string;
  forwardingRequested: boolean;
  forwardingEnabled: boolean;
}

export interface LeadAdapter {
  submit(payload: LeadPayload): Promise<LeadAdapterResult>;
}
