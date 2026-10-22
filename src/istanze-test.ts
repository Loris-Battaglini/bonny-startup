import { Cittadino, Incentivo, Startup } from "./classes";
import type { ICittadino, IStartup, IIncentivo } from "./types";

// Istanzia alcuni oggetti Startup per rappresentare le imprese innovative nel settore dello sport.
export const startup1: IStartup = new Startup(
  "SportTech Solutions",
  "Tecnologia sportiva",
  "Offriamo soluzioni innovative per migliorare le prestazioni degli atleti.",
  ["App di monitoraggio delle prestazioni", "Sensori indossabili"],
);

export const startup2: IStartup = new Startup(
  "FitLife Innovations",
  "Fitness e benessere",
  "Sviluppiamo prodotti e servizi per promuovere uno stile di vita sano.",
  [
    "Piattaforma di allenamento personalizzato",
    "Dispositivi per il monitoraggio della salute",
  ],
);

export const startup3: IStartup = new Startup(
  "ActivePlay Labs",
  "Giochi e intrattenimento sportivo",
  "Creiamo esperienze di gioco interattive per incoraggiare l’attività fisica.",
  ["Giochi di realtà aumentata", "Piattaforme di gamification per il fitness"],
);

// Istanzia oggetti Incentivo per rappresentare i diversi incentivi statali disponibili per promuovere l'attività fisica.
export const incentivo1: IIncentivo = new Incentivo(
  "INC-001",
  "Incentivo per la promozione dell'attività fisica",
  1000,
  [
    "Partecipazione a eventi sportivi",
    "Utilizzo di dispositivi di monitoraggio",
  ],
);

export const incentivo2: IIncentivo = new Incentivo(
  "INC-002",
  "Incentivo per lo sviluppo di applicazioni sportive",
  2000,
  [
    "Sviluppo di app per il fitness",
    "Integrazione con dispositivi indossabili",
  ],
);

export const incentivo3: IIncentivo = new Incentivo(
  "INC-003",
  "Incentivo per la creazione di giochi interattivi per il fitness",
  1500,
  [
    "Sviluppo di giochi di realtà aumentata",
    "Integrazione con piattaforme di gamification",
  ],
);

// Crea un'istanza della classe Cittadino per uno o più cittadini interessati a partecipare alle iniziative sportive.
export const cittadino1: ICittadino = new Cittadino("Mario", "Rossi", 30, [
  "Calcio",
  "Corsa",
  "Nuoto",
]);

export const cittadino2: ICittadino = new Cittadino("Giulia", "Bianchi", 25, [
  "Yoga",
  "Pilates",
  "Ciclismo",
]);

export const cittadino3: ICittadino = new Cittadino("Luca", "Verdi", 35, [
  "Basket",
  "Football",
  "Tennis",
]);

console.log("inizio istanze-test.ts");
