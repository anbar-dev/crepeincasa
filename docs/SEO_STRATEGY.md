# SEO Strategy — Crepe in Casa

## Stato della ricerca

Revisione qualitativa delle SERP italiane eseguita il 2026-08-07. La ricerca ha
confrontato le query principali e i risultati visibili, ma non costituisce una
stima dei volumi: prima di fissare il calendario editoriale vanno raccolti dati
da Google Search Console e, se disponibili, da Keyword Planner o strumenti
analoghi.

La conclusione principale è che le query basate soltanto sulla forma — per
esempio "crepe diagonali", "crepe verticali" e "crepe orizzontali" — non sono
automaticamente pagine autonome. Nei risultati tendono a essere trattate come
sezioni di guide più ampie, insieme a cosa fare, quando chiedere una verifica,
possibili contesti e monitoraggio. Pubblicare molte pagine quasi uguali su
queste varianti crea rischio di contenuti sottili e sovrapposizione d'intento.

## Obiettivo

Intercettare una persona che ha osservato una fessurazione e accompagnarla in
modo ordinato:

1. capire che cosa può descrivere senza fare diagnosi;
2. raccogliere contesto, date, foto e cambiamenti osservati;
3. capire quando può essere utile una verifica sul posto;
4. preparare una richiesta neutra;
5. solo in un secondo momento, conoscere tecniche e fattori di costo.

La risposta alla domanda dell'utente viene prima della CTA. Il sito non deve
promettere di riconoscere una crepa pericolosa, strutturale o sicura da una
foto o da un questionario.

## Architettura editoriale

### 1. Pagina pilastro

`/crepe-nei-muri/` resta la pagina principale del tema. Deve coprire in modo
completo:

- che cosa descrive il termine crepa o fessurazione;
- quali dati osservabili raccogliere;
- differenza tra osservazione e interpretazione;
- possibili contesti, senza usarli come diagnosi;
- quando può essere utile una verifica professionale;
- come preparare una richiesta;
- domande frequenti reali.

### 2. Articoli di supporto, uno alla volta

Un nuovo articolo viene pubblicato solo quando esiste un intento distinto e un
angolo che la pagina pilastro non può trattare bene. Le prime famiglie da
validare sono:

1. **Cosa fare dopo aver notato una crepa** — percorso pratico, documentazione,
   cosa evitare e quando chiedere aiuto.
2. **Quando chiedere una verifica professionale** — criteri prudenti basati su
   cambiamenti osservati, contesto e condizioni che possono richiedere attenzione.
3. **Crepe in casa nuova o dopo lavori** — storia dell'immobile, lavori,
   garanzie e informazioni da raccogliere, senza attribuire cause.
4. **Crepe vicino a porte e finestre** — un caso contestuale con aperture,
   telai, finiture e documentazione; non una promessa di classificazione.
5. **Crepe interne, esterne, soffitto o pavimento** — da separare solo se i dati
   Search Console mostrano domanda e se ogni pagina ha un contenuto realmente
   diverso. La guida `/crepe-nei-muri/interne-o-esterne/` accorpa i primi due
   contesti. La guida `/crepe-nei-muri/crepe-sul-soffitto/` copre il contesto
   del soffitto. La guida `/crepe-nei-muri/crepe-sul-pavimento/` copre il
   contesto della superficie senza sovrapporsi alle future pagine sui cedimenti.
6. **Come documentare e monitorare una fessurazione** — foto datate,
   posizione, confronto nel tempo e limiti delle misure domestiche.
7. **Quali informazioni preparare per un tecnico** — cronologia, contesto,
   allegati pertinenti e domande da portare a un confronto sul posto.

Le forme diagonale, verticale e orizzontale restano inizialmente sezioni della
pagina pilastro o degli articoli contestuali. Non diventano URL autonome solo
perché sono keyword plausibili.

### 3. Cluster tecnico-commerciali, dopo la base informativa

Solo dopo aver costruito fiducia e raccolto query reali si possono sviluppare:

- cedimento delle fondazioni e cedimento del terreno;
- consolidamento delle fondazioni;
- micropali, resine espandenti e sottofondazioni;
- costi e fattori che incidono sul preventivo.

Queste pagine devono spiegare vocabolario, processo, limiti, verifiche e fattori
di scelta. Non devono consigliare una tecnica per il caso individuale e non
devono usare prezzi locali inventati.

## Priorità delle query

La lista non è un elenco da trasformare automaticamente in pagine.

### Priorità A — problema e prossimo passo

- crepe nei muri cosa fare;
- crepe in casa cosa fare;
- crepe nei muri quando preoccuparsi;
- quando chiamare un tecnico per una crepa;
- crepe nei muri a chi rivolgersi;
- fessurazioni nei muri cosa osservare.

### Priorità B — contesto osservabile

- crepe in casa nuova;
- crepe dopo ristrutturazione o lavori;
- crepe vicino a porte e finestre;
- crepe nei muri interni o esterni;
- crepe sul soffitto;
- crepe sul pavimento;
- crepe che cambiano o sembrano aumentare.

### Priorità C — preparazione della verifica

- come fotografare una crepa;
- come monitorare una crepa nel tempo;
- quali informazioni dare a un tecnico;
- cosa controllare senza fare prove o demolizioni.

### Priorità D — tecniche e costi

- consolidamento fondazioni;
- costo consolidamento fondazioni;
- micropali fondazioni;
- costo micropali;
- resine espandenti fondazioni;
- costo resine espandenti;
- sottofondazioni.

## Regola per decidere se creare una pagina

Prima di pubblicare una URL devono esistere tutti questi elementi:

- una domanda specifica e non soltanto una variante grammaticale;
- un intento diverso dalle pagine già pubblicate;
- almeno un contenuto utile originale: schema, procedura, esempio osservabile,
  checklist o fonte verificabile;
- una risposta completa, non una serie di paragrafi riscritti da un template;
- title, description, H1, FAQ e collegamenti interni coerenti;
- un limite esplicito della valutazione online;
- una CTA pertinente e non aggressiva;
- revisione di eventuali affermazioni tecniche o legali;
- piano di misurazione dopo la pubblicazione.

Il template Astro può essere riutilizzato per layout e componenti, ma il testo
deve essere scritto da capo per ogni intento. Il numero di parole non è da solo
un criterio di qualità; una pagina lunga ma generica resta thin.

## Misurazione

Prima del calendario di espansione:

1. collegare Google Search Console;
2. verificare indicizzazione, query, impression, CTR e pagine con segnali reali;
3. configurare eventi GA4 per click CTA, avvio form, completamento form e stato
   del consenso;
4. collegare il form a un backend reale prima di promuovere la lead generation;
5. rivedere ogni nuova pagina dopo un periodo sufficiente di dati;
6. consolidare o ritirare pagine senza intento o senza segnali, invece di
   aggiungerne automaticamente altre.

## Local SEO

Le pagine locali restano disattivate di default. Si pubblica una località solo
quando Search Console o una ricerca commerciale dimostrano domanda, esiste un
servizio realmente coperto, il contenuto è specifico e non viene inventata una
sede, una recensione, un partner o un caso studio.

## Trust e fonti

La SERP è affollata da contenuti che usano formule allarmistiche come
"pericolose", "strutturali" o "sicure". Crepe in Casa deve differenziarsi con
chiarezza, prudenza e fonti reali. Le fonti tecniche vanno citate quando servono;
non si dichiara una revisione professionale se non esiste un revisore
identificato.

## Link e promozione

Non usare backlink automatici. Gli asset più adatti a ottenere citazioni sono:

- guida pilastro realmente completa;
- checklist per preparare un sopralluogo;
- schema per documentare le osservazioni;
- glossario neutro;
- dati o case study soltanto se reali, autorizzati e verificabili.

Principio guida: costruire poche pagine utili che meritano di essere trovate,
misurare la risposta e solo dopo ampliare il sito.
