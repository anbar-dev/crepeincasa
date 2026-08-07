# Roadmap — Crepe in Casa

## Phase 0 — Foundation

- [x] Inizializzare Astro
- [x] Output statico
- [x] GitHub Pages
- [x] GitHub Actions
- [x] Dominio `crepeincasa.it`
- [x] Layout base
- [x] Componente SEO
- [x] Header/footer
- [x] Sitemap
- [x] robots.txt
- [x] 404
- [x] Build/deploy configurati e build verificata
- [x] Google Analytics 4 integrato nel layout condiviso con consenso preventivo

> Phase 0 completata il 2026-08-06. La build statica locale è verificata; il
> deploy GitHub Pages va verificato dopo il push sul repository remoto.

## Phase 1 — Design + Homepage

- [x] Design system
- [x] Homepage
- [x] Posizionamento editoriale indipendente
- [x] CTA informative
- [x] CTA richiesta valutazione
- [x] Disclaimer corretti
- [x] Controllo mobile

> Phase 1 completata il 2026-08-06.

## Phase 2 — Articolo pilastro

- [x] `/crepe-nei-muri/`
- [x] Struttura editoriale modello
- [x] Box prudenza tecnica
- [x] FAQ
- [x] Related content
- [x] CTA discreta
- [x] Revisione anti-allarmismo

> Phase 2 completata il 2026-08-07. La pagina pilastro resta il punto di
> partenza del progetto e non deve essere sostituita da molte pagine quasi
> equivalenti.

## Phase 3 — Funnel lead

- [x] `/richiedi-valutazione/`
- [x] Form progressivo
- [x] Invio email tramite FormSubmit
- [x] Destinazione manuale a `andrea.baragiola@outlook.it`
- [x] Pagina di conferma post-invio
- [x] Gestione manuale delle lead senza inoltro automatico a partner
- [x] Nessuna diagnosi automatica
- [x] Privacy Policy collegata al form e al footer
- [x] Cookie Policy e banner Analytics con scelta separata
- [x] Termini d'uso e disclaimer pubblicati
- [ ] Effettuare il primo invio reale e confermare FormSubmit dalla mail di attivazione
- [ ] Completare i dati identificativi del titolare e i periodi di conservazione
- [ ] Verificare fornitori, trasferimenti e documenti legali con un professionista
- [ ] Definire partner attivi, compatibilità territoriale e limite destinatari
- [ ] Configurare eventi GA4 per CTA, avvio, completamento e consenso

> Il form invia ora le richieste tramite FormSubmit alla casella personale indicata;
> il primo invio deve essere confermato dal link di attivazione ricevuto via email.
> Non esiste inoltro automatico a partner: la gestione delle lead resta manuale.

## Phase 4 — Reset SEO e ritiro contenuti sottili

- [x] Ricerca qualitativa delle SERP italiane principali
- [x] Distinguere query, intento e semplice variante di forma
- [x] Riconoscere che "diagonali", "verticali" e "orizzontali" non meritano
  automaticamente URL autonome
- [x] Ritirare dal build le dieci pagine del vecchio cluster crepe
- [x] Eliminare dal codice i testi delle vecchie pagine
- [x] Aggiornare `docs/SEO_STRATEGY.md`
- [x] Aggiornare questa roadmap
- [ ] Dopo il deploy, controllare in Search Console eventuali URL già indicizzate
- [ ] Decidere redirect o rimozione permanente solo sulla base di impression,
  link e storico reale

> Phase 4 completata il 2026-08-07 per il codice locale. Le pagine ritirate non
> vengono più generate dalla route dinamica `/crepe/[slug]/` e i relativi testi
> non sono più presenti nel progetto.

## Phase 5 — Misurazione prima dell’espansione

- [ ] Collegare Google Search Console
- [ ] Verificare sitemap e indicizzazione del dominio reale
- [ ] Configurare eventi GA4 per il percorso di conversione
- [ ] Definire un report minimo: query, impression, CTR, landing page, CTA,
  form iniziati, form completati e lead ricevute
- [ ] Raccogliere dati senza creare nuove pagine in massa

## Phase 6 — Primo articolo di supporto: cosa fare

Pubblicare una sola pagina dopo un brief approvato. Le candidate iniziali sono:

- `crepe nei muri cosa fare`;
- `crepe nei muri quando chiedere una verifica`;
- `crepe in casa nuova o dopo lavori`.

Checklist obbligatoria:

- [x] query e intento verificati;
- [x] sovrapposizione con `/crepe-nei-muri/` controllata;
- [x] outline originale con esempi osservabili;
- [ ] fonti reali e revisione dei passaggi tecnici;
- [x] title, description, canonical e internal linking;
- [x] CTA neutra verso il riepilogo;
- [x] revisione mobile e anti-allarmismo;
- [x] build e controllo dei link;
- [ ] misurazione post-pubblicazione.

> La prima pagina di supporto è stata scritta in locale il 2026-08-07 su
> `/crepe-nei-muri/cosa-fare/`. Prima del deploy resta da completare una
> revisione tecnica/editoriale delle fonti e la misurazione reale in Search
> Console e Analytics.

## Phase 7 — Secondo articolo di supporto: quando chiedere una verifica

- [x] query e intento distinti dalla pagina "cosa fare";
- [x] outline originale basato su criteri prudenti;
- [x] pagina `/crepe-nei-muri/quando-chiedere-verifica/` scritta;
- [x] FAQ, internal linking e CTA neutra;
- [x] responsive e build verificati;
- [ ] fonti reali e revisione dei passaggi tecnici;
- [ ] misurazione post-pubblicazione.

> La seconda pagina di supporto è stata scritta in locale il 2026-08-07. Prima
> del deploy resta da completare la revisione tecnica/editoriale delle fonti e
> la misurazione reale in Search Console e Analytics.

## Phase 8 — Terzo articolo di supporto: casa nuova o dopo lavori

- [x] query e intento distinti dalle guide precedenti;
- [x] outline originale basato su cronologia e contesto dell’immobile;
- [x] pagina `/crepe-nei-muri/casa-nuova-dopo-lavori/` scritta;
- [x] FAQ, internal linking e CTA neutra;
- [x] responsive e build verificati;
- [ ] fonti reali e revisione dei passaggi tecnici;
- [ ] misurazione post-pubblicazione.

> La terza pagina di supporto è stata scritta in locale il 2026-08-07. Prima
> del deploy resta da completare la revisione tecnica/editoriale delle fonti e
> la misurazione reale in Search Console e Analytics.

## Phase 9 — Cluster informativo validato

Da valutare una pagina alla volta, solo se i dati o l’analisi dell’intento lo
giustificano:

- [ ] crepe vicino a porte e finestre;
- [ ] crepe in casa nuova o dopo lavori;
- [ ] crepe interne ed esterne;
- [ ] crepe sul soffitto;
- [ ] crepe sul pavimento;
- [ ] crepe che cambiano nel tempo;
- [ ] come fotografare e monitorare una fessurazione;
- [ ] quali informazioni preparare per un tecnico.

Le pagine "crepe diagonali", "verticali" e "orizzontali" restano ritirate
finché non emerge un intento autonomo e un contenuto realmente differente.

## Phase 10 — Cedimenti e fondazioni

- [ ] cedimento delle fondazioni;
- [ ] cedimento del terreno;
- [ ] cedimento differenziale;
- [ ] casa che cede;
- [ ] pavimento che sprofonda.

Queste pagine richiedono particolare prudenza: descrivere il problema e il
bisogno di verifica, senza concludere che esista un cedimento.

## Phase 11 — Tecniche e costi

- [ ] consolidamento fondazioni;
- [ ] micropali per fondazioni;
- [ ] resine espandenti;
- [ ] sottofondazioni;
- [ ] confronto tra tecniche come guida generale;
- [ ] costo consolidamento fondazioni;
- [ ] costo micropali;
- [ ] costo resine;
- [ ] fattori che influenzano il prezzo.

Nessun prezzo locale inventato e nessuna tecnica proposta per un caso
individuale.

## Phase 12 — Utility editoriale

- [ ] tool "Prepara le informazioni sulle tue crepe";
- [ ] riepilogo osservazioni;
- [ ] nessuna diagnosi;
- [ ] integrazione con form lead;
- [ ] checklist o schema scaricabile realmente utile e linkabile.

## Phase 13 — Partner e local SEO

- [ ] `/per-professionisti/`;
- [ ] form candidatura partner;
- [ ] criteri partner e compatibilità territoriale;
- [ ] definire data/locations;
- [ ] attivare soltanto 1–3 località test con contenuto distinto;
- [ ] nessuna sede, recensione o caso inventato;
- [ ] misurare prima di espandere.

## Phase 14 — Audit continuativo

- [ ] contenuti sottili e sovrapposizione d’intento;
- [ ] title e meta description duplicati;
- [ ] prudenza tecnica;
- [ ] internal linking;
- [ ] Core Web Vitals e responsive;
- [ ] conversioni e qualità dei lead;
- [ ] aggiornamento trimestrale della mappa delle query;
- [ ] ritiro o consolidamento delle pagine che non dimostrano utilità.
