export type AreaSportiva =
  | "eventi-sportivi"
  | "monitoraggio"
  | "app-fitness"
  | "dispositivi-indossabili"
  | "realtà-aumentata"
  | "gamification-fitness";

// Definisci un'interfaccia IStartup per rappresentare le startup innovative nel settore dello sport.
export interface IStartup {
  nome: string;
  settore: string;
  aree: AreaSportiva[];
  descrizione: string;
  serviziOfferti: string[];
  readonly incentiviRicevuti: readonly IIncentivo[];
  readonly cittadiniPartecipanti: readonly ICittadino[];

  // Metodo per ricevere un incentivo.
  riceviIncentivo(incentivo: IIncentivo): void;
  registraCittadinoPartecipante(cittadino: ICittadino): boolean;
}

export interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: number;
  criteriDiIdoneita: AreaSportiva[];
  readonly startupAssegnata: readonly IStartup[];

  // Metodo per assegnare l'incentivo a una startup qualificata.
  assegnaAStartup(startup: IStartup): boolean;
}

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: AreaSportiva[];

  // per partecipare alle attività o utilizzare i prodotti/servizi offerti dalla startup.
  partecipaAttività(startup: IStartup): boolean;
}
