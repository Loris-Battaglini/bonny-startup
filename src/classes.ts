import type { IStartup, IIncentivo, ICittadino } from "./types";

export class Startup implements IStartup {
  nome: string;
  settore: string;
  descrizione: string;
  serviziOfferti: string[];

  constructor(
    nome: string,
    settore: string,
    descrizione: string,
    serviziOfferti: string[],
  ) {
    this.nome = nome;
    this.settore = settore;
    this.descrizione = descrizione;
    this.serviziOfferti = serviziOfferti;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `La startup ${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione}`,
    );
  }
}

export class Incentivo implements IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: number;
  criteriDiIdoneita: string[];

  constructor(
    codiceIdentificativo: string,
    descrizione: string,
    valoreIncentivo: number,
    criteriDiIdoneita: string[],
  ) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valoreIncentivo = valoreIncentivo;
    this.criteriDiIdoneita = criteriDiIdoneita;
  }

  assegnaAStartup(startup: IStartup): void {
    console.log(
      `L'incentivo ${this.descrizione} è stato assegnato alla startup: ${startup.nome}`,
    );
  }
}

export class Cittadino implements ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[],
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }

  partecipaAttività(startup: IStartup): void {
    console.log(
      `Il cittadino ${this.nome} ${this.cognome} partecipa all'attività della startup: ${startup.nome}`,
    );
  }
}
