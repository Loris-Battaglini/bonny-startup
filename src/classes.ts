import type {
  AreaSportiva,
  IStartup,
  IIncentivo,
  ICittadino,
} from "./types";

export class Startup implements IStartup {
  nome: string;
  settore: string;
  aree: AreaSportiva[];
  descrizione: string;
  serviziOfferti: string[];

  private readonly _incentiviRicevuti: IIncentivo[] = [];

  get incentiviRicevuti(): readonly IIncentivo[] {
    return this._incentiviRicevuti;
  }

  constructor(
    nome: string,
    settore: string,
    descrizione: string,
    serviziOfferti: string[],
    aree: AreaSportiva[],
  ) {
    this.nome = nome;
    this.settore = settore;
    this.aree = aree;
    this.descrizione = descrizione;
    this.serviziOfferti = serviziOfferti;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    if (this._incentiviRicevuti.includes(incentivo)) {
      return;
    }

    this._incentiviRicevuti.push(incentivo);
    console.log(
      `La startup ${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione}`,
    );
  }
}

export class Incentivo implements IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valoreIncentivo: number;
  criteriDiIdoneita: AreaSportiva[];

  private readonly _startupAssegnata: IStartup[] = [];

  get startupAssegnata(): readonly IStartup[] {
    return this._startupAssegnata;
  }

  constructor(
    codiceIdentificativo: string,
    descrizione: string,
    valoreIncentivo: number,
    criteriDiIdoneita: AreaSportiva[],
  ) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valoreIncentivo = valoreIncentivo;
    this.criteriDiIdoneita = criteriDiIdoneita;
  }

  assegnaAStartup(startup: IStartup): boolean {
    if (this._startupAssegnata.includes(startup)) {
      return false;
    }

    this._startupAssegnata.push(startup);
    startup.riceviIncentivo(this);
    console.log(
      `L'incentivo ${this.descrizione} è stato assegnato alla startup: ${startup.nome}`,
    );
    return true;
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
