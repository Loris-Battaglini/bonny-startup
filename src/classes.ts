import type { AreaSportiva, IStartup, IIncentivo, ICittadino } from "./types";

export class Startup implements IStartup {
  readonly nome: string;
  readonly settore: string;
  readonly descrizione: string;
  readonly serviziOfferti: readonly string[];

  private readonly _aree: readonly AreaSportiva[];
  private readonly _incentiviRicevuti: IIncentivo[] = [];
  private readonly _cittadiniPartecipanti: ICittadino[] = [];

  get aree(): readonly AreaSportiva[] {
    return this._aree;
  }

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
    serviziOfferti: readonly string[],
    aree: readonly AreaSportiva[],
  ) {
    this.nome = nome;
    this.settore = settore;
    this.descrizione = descrizione;
    this.serviziOfferti = serviziOfferti;
    this._aree = aree;
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

    const interesseAffine = cittadino.interessiSportivi.some((interesse) =>
      this._aree.includes(interesse),
    );
    if (!interesseAffine) {
      return false;
    }

    this._cittadiniPartecipanti.push(cittadino);
    return true;
  }
}

export class Incentivo implements IIncentivo {
  readonly codiceIdentificativo: string;
  readonly descrizione: string;
  readonly valoreIncentivo: number;

  private readonly _criteriDiIdoneita: readonly AreaSportiva[];
  private readonly _startupAssegnata: IStartup[] = [];

  get criteriDiIdoneita(): readonly AreaSportiva[] {
    return this._criteriDiIdoneita;
  }

  get startupAssegnata(): readonly IStartup[] {
    return this._startupAssegnata;
  }

  constructor(
    codiceIdentificativo: string,
    descrizione: string,
    valoreIncentivo: number,
    criteriDiIdoneita: readonly AreaSportiva[],
  ) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valoreIncentivo = valoreIncentivo;
    this._criteriDiIdoneita = criteriDiIdoneita;
  }

  assegnaAStartup(startup: IStartup): boolean {
    if (this._startupAssegnata.includes(startup)) {
      return false;
    }

    // controlla se almeno un elemento dell'array startup.aree è incluso nell'array this.criteriDiIdoneita
    if (!startup.aree.some((area) => this.criteriDiIdoneita.includes(area))) {
      return false;
    }

    this._startupAssegnata.push(startup);
    startup.riceviIncentivo(this);
    return true;
  }
}

export class Cittadino implements ICittadino {
  readonly nome: string;
  readonly cognome: string;
  readonly eta: number;

  private readonly _interessiSportivi: AreaSportiva[];

  get interessiSportivi(): readonly AreaSportiva[] {
    return this._interessiSportivi;
  }

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: AreaSportiva[],
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this._interessiSportivi = interessiSportivi;
  }

  partecipaAttività(startup: IStartup): boolean {
    return startup.registraCittadinoPartecipante(this);
  }
}
