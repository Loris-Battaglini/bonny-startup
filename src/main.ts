// interfacce
import type { IStartup } from "./types";

// istanze
import {
  startup1,
  startup2,
  startup3,
  incentivo1,
  incentivo2,
  incentivo3,
  cittadino1,
  cittadino2,
  cittadino3,
} from "./istanze-test";

console.log(" ESECUZIONE TEST BONNY STARTUP");

// TEST 1: ASSEGNAZIONE INCENTIVI
console.log("Test Idoneità e Assegnazione Incentivi");

const testStartupIncentivi = [
  { startup: startup1, incentivo: incentivo1 },
  { startup: startup2, incentivo: incentivo2 },
  { startup: startup3, incentivo: incentivo3 },
];

testStartupIncentivi.forEach(({ startup, incentivo }) => {
  const assegnazioneCreata = incentivo.assegnaAStartup(startup);
  const assegnazioneDuplicata = incentivo.assegnaAStartup(startup);

  if (assegnazioneCreata) {
    console.log(
      `La startup ${startup.nome} ha ricevuto l'incentivo: ${incentivo.descrizione}`,
    );
    console.log(
      `L'incentivo ${incentivo.descrizione} è stato assegnato alla startup: ${startup.nome}`,
    );
  }

  const statoAggiornatoStartup =
    startup.incentiviRicevuti.filter((ricevuto) => ricevuto === incentivo)
      .length === 1;
  const statoAggiornatoIncentivo =
    incentivo.startupAssegnata.filter((assegnata) => assegnata === startup)
      .length === 1;

  if (
    assegnazioneCreata &&
    !assegnazioneDuplicata &&
    statoAggiornatoStartup &&
    statoAggiornatoIncentivo
  ) {
    console.log(
      `✅ [OK & STATO] ${startup.nome} è idonea; l'assegnazione è stata registrata una sola volta su entrambi i lati.`,
    );
  } else {
    console.log(`❌ [ERRORE] Lo stato negli array non è stato aggiornato.`);
  }
});

// TEST 2: PARTECIPAZIONE CITTADINI
console.log("Test Partecipazione Cittadini alle Attività");

const testCittadiniStartup = [
  { cittadino: cittadino1, startup: startup1 },
  { cittadino: cittadino2, startup: startup2 },
  { cittadino: cittadino3, startup: startup3 },
];

testCittadiniStartup.forEach(({ cittadino, startup }) => {
  const giàRegistrato = startup.cittadiniPartecipanti.includes(cittadino);
  const partecipazioneRegistrata = cittadino.partecipaAttività(startup);

  console.log(
    partecipazioneRegistrata
      ? `✅ [PARTECIPA] ${cittadino.nome} ${cittadino.cognome} parteciperà alle attività.`
      : giàRegistrato
        ? `ℹ️ [GIÀ REGISTRATO] ${cittadino.nome} ${cittadino.cognome} risulta già tra i partecipanti.`
        : `🤔 [NON PARTECIPA] ${cittadino.nome} ${cittadino.cognome} non ha interessi affini a ${startup.nome}.`,
  );
});

// TEST NEGATIVO (Per verificare l'esclusione e vedere la ❌)
console.log("Test Negativo: Startup non idonea");

// Creo una startup fittizia fuori settore
const startupFittizia: IStartup = {
  nome: "Ristorante Da Mario",
  settore: "Ristorazione e Catering",
  aree: [],
  descrizione: "Cucina tradizionale locale",
  serviziOfferti: ["Pranzo", "Cena", "Delivery"],
  incentiviRicevuti: [],
  cittadiniPartecipanti: [],
  riceviIncentivo: () => {},
  registraCittadinoPartecipante: () => false,
};

if (incentivo1.assegnaAStartup(startupFittizia)) {
  console.log(`✅ [OK] ${startupFittizia.nome} è idonea.`);
} else {
  console.log(
    `❌ [TEST NEGATIVO RIUSCITO] La startup "${startupFittizia.nome}" (Settore: ${startupFittizia.settore}) è stata giustamente scartata perché non rispetta i criteri dell'incentivo!`,
  );
}

console.log("FINE TEST COMPLETATI");
