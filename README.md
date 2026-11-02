# Bonny Startup 🚀

Progetto didattico sviluppato in **TypeScript** e basato sui principi della Programmazione a Oggetti (OOP). Modella startup, incentivi e cittadini, con verifiche dimostrative di idoneità e partecipazione e gestione dello stato in memoria.

## 🛠️ Tecnologie e Strumenti

- **TypeScript** (Interfacce, tipizzazione rigorosa e classi)
- **Vite** (Bundler e ambiente di esecuzione)

## 📁 Struttura del Progetto

- `src/types.ts`: Contratti e interfacce del dominio (`IStartup`, `IIncentivo`, `ICittadino`).
- `src/classes.ts`: Implementazione delle classi e gestione incapsulata dello stato in memoria.
- `src/istanze-test.ts`: Dataset di prova con istanze di startup, incentivi e cittadini.
- `src/main.ts`: Logica di business, funzioni di verifica (`verificaIdoneita`, `verificaPartecipazione`), test e controlli dello stato.

## 🔍 Caratteristiche Principali

- **Gestione dello Stato OOP**: Tracciamento reale degli incentivi ricevuti dalle startup (`incentiviRicevuti`) e delle assegnazioni sugli incentivi (`startupAssegnata`).
- **Verifica Idoneità**: Confronto esatto tra le aree sportive tipizzate dichiarate da startup e incentivi.
- **Partecipazione Cittadini**: Match dinamico tra gli interessi sportivi dei cittadini e le attività offerte.
- **Controlli dello stato**: Le assegnazioni sono idempotenti e registrate su entrambi i lati; i cittadini partecipanti sono memorizzati presso la startup. Gli esiti vengono mostrati nella console.

## 🚀 Come Eseguire il Progetto

Installa le dipendenze e avvia il server di sviluppo:

```bash
npm install
npm run dev
```

Apri nel browser l'indirizzo indicato da Vite (di norma `http://localhost:5173`).
Le verifiche del progetto vengono eseguite all'avvio e i risultati sono visibili
nella console del browser.

Per verificare la compilazione TypeScript e creare la build di produzione:

```bash
npm run build
```
