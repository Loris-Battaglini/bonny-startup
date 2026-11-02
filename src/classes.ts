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
  private readonly _cittadiniPartecipanti: ICittadino[] = [];

  get incentiviRicevuti(): readonly IIncentivo[] {
    return this._incentiviRicevuti;
  }

  get cittadiniPartecipanti(): readonly ICittadino[] {
    return this._cittadiniPartecipanti;
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
  }

  registraCittadinoPartecipante(cittadino: ICittadino): boolean {
    if (this._cittadiniPartecipanti.includes(cittadino)) {
      return false;
    }

    this._cittadiniPartecipanti.push(cittadino);
    return true;
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

  partecipaAttività(startup: IStartup): boolean {
    return startup.registraCittadinoPartecipante(this);
  }
}
