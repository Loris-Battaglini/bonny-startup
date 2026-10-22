// Definisci un'interfaccia IStartup per rappresentare le startup innovative nel settore dello sport.
export interface IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  serviziOfferti: string[];

  // Metodo per ricevere un incentivo.
  riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: number;
  criteriDiIdoneita: string[];

  // Metodo per assegnare l'incentivo a una startup qualificata.
  assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  // per partecipare alle attività o utilizzare i prodotti/servizi offerti dalla startup.
  partecipaAttività(startup: IStartup): void;
}
