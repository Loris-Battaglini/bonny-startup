# Bonny Startup 🚀

Progetto didattico sviluppato in **TypeScript** e basato sui principi della Programmazione a Oggetti (OOP). Modella startup, incentivi e cittadini, con verifiche dimostrative di idoneità e partecipazione e gestione dello stato in memoria.

## 🛠️ Tecnologie e Strumenti

- **TypeScript** (Interfacce, tipizzazione rigorosa e classi)
- **Vite** (Bundler e ambiente di esecuzione)

## 📁 Struttura del Progetto

- `src/types.ts`: Contratti e interfacce del dominio (`IStartup`, `IIncentivo`, `ICittadino`).
- `src/classes.ts`: Implementazione delle classi e gestione incapsulata dello stato in memoria.
- `src/istanze-test.ts`: Dataset di prova con istanze di startup, incentivi e cittadini.
- `src/main.ts`: Avvio degli esempi e verifica dei risultati tramite i metodi delle classi.

## 🔍 Caratteristiche Principali

- **Gestione dello Stato OOP**: Tracciamento reale degli incentivi ricevuti dalle startup (`incentiviRicevuti`) e delle assegnazioni sugli incentivi (`startupAssegnata`).
- **Verifica Idoneità**: `Incentivo` assegna l'incentivo solo alle startup che condividono almeno un'area sportiva tipizzata (`AreaSportiva`) con i criteri di idoneità.
- **Partecipazione Cittadini**: La partecipazione viene registrata dalla startup solo se cittadino e startup condividono almeno un'area sportiva tipizzata (`AreaSportiva`); il controllo è gestito dalle classi, non dal `main`.
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
