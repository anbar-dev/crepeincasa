# AGENTS.md — Crepe in Casa

Leggi sempre `VISION.md`, `ROADMAP.md` e `docs/SEO_STRATEGY.md` prima di lavori significativi.

## Stack

- Astro
- output statico
- GitHub Pages
- GitHub Actions
- HTML semantico
- CSS semplice e mantenibile
- JavaScript minimo

## Regole generali

- Riutilizza componenti.
- Mantieni contenuto e presentazione separati quando utile.
- Evita dipendenze inutili.
- Non fare refactoring non richiesti.
- Non inserire secret nel repository.
- Preferisci soluzioni statiche semplici.
- Una feature logicamente completa = un commit.

## Sicurezza tecnica

Questo sito NON effettua diagnosi strutturali.

È vietato affermare sulla base di testo, immagini o questionari:
- che una crepa è strutturale;
- che un edificio è sicuro;
- che un edificio è pericoloso;
- che esiste un cedimento;
- che serve necessariamente un consolidamento;
- quale tecnica è necessaria.

Usa sempre linguaggio prudente:
- possibile;
- compatibile con;
- può avere diverse cause;
- richiede verifica sul posto;
- un tecnico qualificato può valutare.

Non usare allarmismo commerciale.

Non minimizzare situazioni potenzialmente serie.

Se il contenuto descrive condizioni che potrebbero richiedere attenzione urgente, invita l'utente a rivolgersi tempestivamente a un professionista qualificato o alle autorità competenti.

## SEO

Ogni pagina indicizzabile deve avere:
- intento distinto;
- title unico;
- meta description unica;
- canonical;
- heading coerenti;
- internal linking utile.

Non creare:
- doorway pages;
- pagine città generate in massa;
- testo duplicato;
- keyword stuffing;
- fake case study;
- fake interventi;
- fake tecnici;
- fake sedi;
- fake recensioni;
- statistiche inventate;
- prezzi locali inventati.

Non dichiarare "revisionato da ingegnere" se non esiste realmente un revisore identificato e configurato.

## Local SEO

Le location page devono essere disattivate di default.

Pubblicare una località soltanto quando:
- `active=true`;
- esiste contenuto utile;
- esiste una ragione commerciale/SEO reale;
- la pagina non è una semplice copia con città sostituita.

## Lead generation

Il form deve creare un riepilogo neutro delle osservazioni.

Mai classificare:
- grave;
- strutturale;
- pericoloso;
- sicuro;
- urgente;

a meno che non si tratti soltanto di ripetere una scelta esplicita dell'utente, chiaramente etichettata come tale.

## Partner

Non inventare partner.

I dati devono essere inoltrabili soltanto:
- con consenso;
- a partner attivi;
- compatibili con area e tipo di richiesta;
- in numero massimo configurabile.

## Privacy

- niente checkbox preselezionate;
- consenso separato per inoltro;
- minimizzazione;
- niente marketing implicito;
- TODO chiari nei testi legali;
- nessuna pretesa di consulenza legale definitiva.

## Git e deploy

Prima di completare:
1. esegui `npm run build`;
2. correggi errori;
3. controlla broken links quando pertinente;
4. controlla title/meta duplicati;
5. controlla responsive;
6. aggiorna `ROADMAP.md`;
7. crea commit descrittivo;
8. push se possibile e autorizzato.

## Regola finale

Se il task chiede una singola pagina modello, non espandere automaticamente il sito a decine di pagine.
