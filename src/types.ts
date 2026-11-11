export type AreaSportiva =
  | "eventi-sportivi"
  | "monitoraggio"
  | "app-fitness"
  | "dispositivi-indossabili"
  | "realtà-aumentata"
  | "gamification-fitness";

// Definisci un'interfaccia IStartup per rappresentare le startup innovative nel settore dello sport.
export interface IStartup {
  readonly nome: string;
  readonly settore: string;
  readonly aree: readonly AreaSportiva[];
  readonly descrizione: string;
  readonly serviziOfferti: readonly string[];
  readonly incentiviRicevuti: readonly IIncentivo[];
  readonly cittadiniPartecipanti: readonly ICittadino[];

  // Metodo per ricevere un incentivo.
  riceviIncentivo(incentivo: IIncentivo): void;
  registraCittadinoPartecipante(cittadino: ICittadino): boolean;
}

export interface IIncentivo {
  readonly codiceIdentificativo: string;
  readonly descrizione: string;
  readonly valoreIncentivo: number;
  readonly criteriDiIdoneita: readonly AreaSportiva[];
  readonly startupAssegnata: readonly IStartup[];

  // Metodo per assegnare l'incentivo a una startup qualificata.
  assegnaAStartup(startup: IStartup): boolean;
}

export interface ICittadino {
  readonly nome: string;
  readonly cognome: string;
  readonly eta: number;
  readonly interessiSportivi: readonly AreaSportiva[];

  // per partecipare alle attività o utilizzare i prodotti/servizi offerti dalla startup.
  partecipaAttività(startup: IStartup): boolean;
}
