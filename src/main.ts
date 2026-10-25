// interfacce
import type { IStartup, IIncentivo } from "./types";

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

// Controlla se almeno una parola chiave di un criterio dell'incentivo compare nel settore o servizi offerti dalla startup.

const verificaIdoneita = (
  startup: IStartup,
  incentivo: IIncentivo,
): boolean => {
  return incentivo.criteriDiIdoneita.some((criterio) => {
    const paroleCriterio = criterio
      .toLowerCase()
      .split(" ")
      .filter((p) => p.length > 3);

    const matchSettore = paroleCriterio.some((parola) =>
      startup.settore.toLowerCase().includes(parola),
    );
    const matchServizi = startup.serviziOfferti.some((servizio) =>
      paroleCriterio.some((parola) => servizio.toLowerCase().includes(parola)),
    );

    return matchSettore || matchServizi;
  });
};

// Verifica se il cittadino ha almeno un interesse affine ai servizi o al settore della startup
const verificaPartecipazione = (
  cittadino: typeof cittadino1,
  startup: IStartup,
): boolean => {
  return cittadino.interessiSportivi.some((interesse) => {
    const interesseLower = interesse.toLowerCase();
    const matchServizi = startup.serviziOfferti.some((servizio) =>
      servizio.toLowerCase().includes(interesseLower),
    );
    const matchSettore = startup.settore.toLowerCase().includes(interesseLower);

    // Associazione logica extra per interessi specifici ma affini
    const affinitaGenerica =
      (interesseLower === "corsa" ||
        interesseLower === "yoga" ||
        interesseLower === "pilates") &&
      (startup.settore.toLowerCase().includes("fitness") ||
        startup.settore.toLowerCase().includes("sport"));

    return matchServizi || matchSettore || affinitaGenerica;
  });
};

// TEST 1: ASSEGNAZIONE INCENTIVI
console.log("\n--- Test Idoneità e Assegnazione Incentivi ---");

const testStartupIncentivi = [
  { startup: startup1, incentivo: incentivo1 },
  { startup: startup2, incentivo: incentivo2 },
  { startup: startup3, incentivo: incentivo3 },
];

testStartupIncentivi.forEach(({ startup, incentivo }) => {
  if (verificaIdoneita(startup, incentivo)) {
    incentivo.assegnaAStartup(startup);
    startup.riceviIncentivo(incentivo);
    console.log(
      `✅ [OK] ${startup.nome} è idonea per l'incentivo ${incentivo.codiceIdentificativo}`,
    );
  } else {
    console.log(
      `❌ [NO] ${startup.nome} non soddisfa i criteri per ${incentivo.descrizione}`,
    );
  }
});

// TEST 2: PARTECIPAZIONE CITTADINI
console.log("Test Partecipazione Cittadini alle Attività");

const testCittadiniStartup = [
  { cittadino: cittadino1, startup: startup1, nomeAttivita: "SportTech" },
  { cittadino: cittadino2, startup: startup2, nomeAttivita: "FitLife" },
  { cittadino: cittadino3, startup: startup3, nomeAttivita: "ActivePlay" },
];

testCittadiniStartup.forEach(({ cittadino, startup }) => {
  if (verificaPartecipazione(cittadino, startup)) {
    cittadino.partecipaAttività(startup);
    console.log(
      `✅ [PARTECIPA] ${cittadino.nome} ${cittadino.cognome} parteciperà alle attività.`,
    );
  } else {
    console.log(
      `ℹ️ [NON PARTECIPA] ${cittadino.nome} ${cittadino.cognome} non ha interessi affini a ${startup.nome}.`,
    );
  }
});

console.log("FINE TEST COMPLETATI CON SUCCESSO");
