export interface CrepeClusterPage {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  shortAnswer: string[];
  contextTitle: string;
  contextIntro: string;
  possibleCauses: { title: string; text: string }[];
  observations: string[];
  limitsTitle: string;
  limits: string[];
  verificationTitle: string;
  verification: string[];
  faq: { question: string; answer: string }[];
}

// Archivio editoriale non pubblicato. Le vecchie pagine del cluster sono state
// ritirate dal build finché non verranno riscritte con un intento distinto e
// contenuto sufficiente.
const crepeClusterDrafts: CrepeClusterPage[] = [
  {
    slug: 'crepe-diagonali',
    title: 'Crepe diagonali: cosa osservare senza trarre conclusioni',
    metaTitle: 'Crepe diagonali: cosa osservare e come descriverle',
    description: 'Crepe diagonali nei muri: contesto, osservazioni utili, possibili categorie di cause e limiti di una valutazione online.',
    eyebrow: 'Orientamento della crepa',
    lead: 'Una crepa diagonale si descrive anche in base al punto da cui parte, alla direzione e agli elementi che incontra. L’inclinazione visibile, da sola, non stabilisce l’origine del fenomeno.',
    shortAnswer: [
      'Il termine “diagonale” indica l’andamento osservato sulla superficie. Può riguardare una finitura, una parete o il raccordo tra elementi diversi: dalla sola forma non è possibile capire quale strato sia coinvolto.',
      'Per preparare una descrizione utile, annota dove inizia e termina, se attraversa aperture o giunti, quando l’hai notata e se hai percepito cambiamenti. Un tecnico qualificato può poi valutare il contesto sul posto.',
    ],
    contextTitle: 'La direzione è un dato, non una diagnosi',
    contextIntro: 'Prima di interpretare una diagonale, conviene separare ciò che si vede dalle ipotesi sulla causa. La posizione e la storia del locale aiutano a fornire un quadro più completo.',
    possibleCauses: [
      { title: 'Finiture e supporti', text: 'La discontinuità può interessare pittura, intonaco o altri strati superficiali; la profondità non si ricava con certezza dalla fotografia.' },
      { title: 'Aperture e raccordi', text: 'Porte, finestre, angoli e cambi di materiale creano punti di passaggio che meritano di essere indicati nella descrizione.' },
      { title: 'Movimenti o variazioni ambientali', text: 'Materiali, umidità, temperatura e storia dell’edificio possono essere considerati insieme, senza attribuire automaticamente il fenomeno a uno di essi.' },
      { title: 'Lavori recenti', text: 'Modifiche, tracce impiantistiche o ripristini possono cambiare il contesto e sono informazioni utili da riferire.' },
    ],
    observations: [
      'Indica se la diagonale sale o scende guardandola frontalmente e in quale ambiente si trova.',
      'Segna il punto di partenza e di arrivo rispetto a angoli, solai, porte, finestre o giunti.',
      'Annota se la linea è continua, a tratti, ramificata o accompagnata da distacchi visibili della finitura.',
      'Confronta fotografie datate solo per descrivere eventuali cambiamenti percepiti, senza usarle per classificare la crepa.',
      'Raccogli informazioni su lavori, infiltrazioni e variazioni d’uso dell’ambiente.',
    ],
    limitsTitle: 'Perché la diagonale non basta',
    limits: [
      'La stessa direzione può comparire in contesti costruttivi e materiali diversi.',
      'Una foto non mostra necessariamente il lato opposto della parete, gli strati sottostanti o la relazione con il resto dell’edificio.',
      'Non è possibile stabilire online se sia coinvolta una parte strutturale, se esista un cedimento o quale intervento sia appropriato.',
    ],
    verificationTitle: 'Quando ordinare le informazioni per un sopralluogo',
    verification: [
      'Una verifica sul posto può essere utile se la diagonale è nuova, se ti sembra cambiata o se compare insieme ad altri elementi che non sai interpretare.',
      'Porta una cronologia semplice, fotografie con data e indicazioni sui lavori o sull’umidità. Sarà il professionista a decidere quali controlli siano pertinenti.',
    ],
    faq: [
      { question: 'Una crepa diagonale è sempre più preoccupante?', answer: 'No. L’orientamento, considerato isolatamente, non consente di graduare la situazione né di stabilirne la causa.' },
      { question: 'Devo seguire la crepa con uno strumento?', answer: 'Puoi descriverne il percorso e fotografarla senza modificare la superficie. Misure più tecniche vanno lasciate a una verifica qualificata.' },
      { question: 'È utile indicare se passa vicino a una finestra?', answer: 'Sì: la relazione con aperture e altri elementi è un dato di contesto utile, senza trasformarlo in una spiegazione automatica.' },
    ],
  },
  {
    slug: 'crepe-verticali',
    title: 'Crepe verticali nei muri: posizione e andamento da annotare',
    metaTitle: 'Crepe verticali nei muri: osservazioni utili e limiti',
    description: 'Crepe verticali nei muri: come descrivere posizione, andamento e contesto senza formulare una diagnosi online.',
    eyebrow: 'Orientamento della crepa',
    lead: 'Una linea verticale può comparire in punti e materiali diversi. Per capirne il contesto servono più informazioni dell’orientamento: posizione, continuità, ambiente e storia dell’immobile.',
    shortAnswer: [
      '“Verticale” descrive l’aspetto della linea rispetto al pavimento. Non dice da solo se la discontinuità sia superficiale o interessi altri elementi dell’edificio.',
      'Osserva se segue un angolo, un giunto, una variazione di materiale o un’apertura. Annota anche quando è comparsa e se l’aspetto è cambiato secondo la tua percezione.',
    ],
    contextTitle: 'Che cosa cambia tra una parete e l’altra',
    contextIntro: 'Una crepa verticale va letta nel suo ambiente: una parete interna, un rivestimento, un angolo e un muro esterno non offrono lo stesso contesto da osservare.',
    possibleCauses: [
      { title: 'Giunti e cambi di materiale', text: 'La linea può trovarsi lungo una discontinuità tra elementi o finiture diverse; è utile descrivere cosa c’è ai suoi lati.' },
      { title: 'Ritiro e finiture', text: 'Alcuni strati superficiali possono mostrare discontinuità legate alla posa o alle variazioni ambientali, ma la sola vista non permette di confermarlo.' },
      { title: 'Aperture e collegamenti', text: 'La distanza da porte, finestre, pilastri o tramezzi aiuta a localizzare il fenomeno per una verifica successiva.' },
      { title: 'Umidità o manutenzioni', text: 'Acqua, condensa, ripristini e lavori recenti sono elementi di storia da riportare senza usarli come causa certa.' },
    ],
    observations: [
      'Descrivi la parete e l’altezza approssimativa a cui compare la linea.',
      'Indica se è perfettamente verticale solo a vista o se presenta deviazioni, interruzioni o ramificazioni.',
      'Segnala la relazione con angoli, giunti, rivestimenti, porte, finestre e impianti visibili.',
      'Annota se la finitura è integra, sfarinata, umida o localmente distaccata, limitandoti a ciò che osservi.',
      'Riporta la data della prima osservazione e gli eventuali lavori svolti nella zona.',
    ],
    limitsTitle: 'La forma non indica la profondità',
    limits: [
      'Una linea apparentemente sottile può appartenere a uno strato diverso da quello che si immagina guardando la superficie.',
      'Senza esaminare materiali, collegamenti e storia dell’immobile non è possibile attribuire una causa alla crepa.',
      'Testo, foto e questionari non permettono di concludere che l’edificio sia sicuro o pericoloso, né di indicare una tecnica di intervento.',
    ],
    verificationTitle: 'Che cosa portare a una valutazione',
    verification: [
      'Prepara una vista ampia dell’ambiente e dettagli datati della linea, mantenendo una descrizione separata dalle ipotesi.',
      'Se il fenomeno persiste, cambia o si associa ad altri segnali che non sai valutare, una verifica di un professionista qualificato può aiutare a definire i passi successivi.',
    ],
    faq: [
      { question: 'Una crepa verticale è tipica di una sola causa?', answer: 'No. La direzione è un’osservazione iniziale e deve essere considerata insieme a contesto, materiali e andamento nel tempo.' },
      { question: 'Conviene coprirla subito con la pittura?', answer: 'Prima di ripristinare la finitura può essere utile documentare l’aspetto e la data. Se hai dubbi o il fenomeno cambia, chiedi una valutazione.' },
      { question: 'Cosa scrivo nella richiesta?', answer: 'Indica luogo, forma, data, cambiamenti percepiti, lavori recenti e tutto ciò che è visibile senza usare etichette tecniche.' },
    ],
  },
  {
    slug: 'crepe-orizzontali',
    title: 'Crepe orizzontali: il contesto conta più della sola direzione',
    metaTitle: 'Crepe orizzontali nei muri: cosa osservare',
    description: 'Crepe orizzontali nei muri: guida alle osservazioni, al contesto e ai limiti di ciò che si può stabilire online.',
    eyebrow: 'Orientamento della crepa',
    lead: 'Una crepa orizzontale segue, in modo più o meno regolare, una direzione parallela al pavimento. È un dato da descrivere, non una conclusione sulla causa o sulla gravità.',
    shortAnswer: [
      'L’andamento orizzontale può essere osservato su pareti interne o esterne, su finiture differenti e vicino a elementi diversi. La sua presenza non identifica da sola il materiale coinvolto.',
      'Indica altezza, lunghezza visibile, continuità, rapporto con solai o aperture e condizioni della superficie. Quando serve, solo un esame sul posto può chiarire quali aspetti approfondire.',
    ],
    contextTitle: 'Un andamento da collocare nella parete',
    contextIntro: 'L’altezza della linea e il suo rapporto con i bordi della stanza possono raccontare il contesto osservabile, ma non trasformano la pagina in uno strumento di diagnosi.',
    possibleCauses: [
      { title: 'Raccordi tra elementi', text: 'La crepa può seguire un passaggio tra materiali o una zona di giunzione che va identificata durante la descrizione.' },
      { title: 'Finiture e rivestimenti', text: 'Pittura, intonaco, piastrelle o altri rivestimenti possono rendere visibile una discontinuità in modi diversi.' },
      { title: 'Acqua e condizioni ambientali', text: 'Macchie, umidità, condensa o variazioni di esposizione sono informazioni da annotare, non spiegazioni già confermate.' },
      { title: 'Storia dell’edificio', text: 'Età, modifiche, ampliamenti e ripristini possono offrire un quadro utile a chi effettua la verifica.' },
    ],
    observations: [
      'Misura solo a grandi linee la posizione: vicino al pavimento, a metà parete o sotto il soffitto.',
      'Descrivi se l’andamento è rettilineo, ondulato, interrotto o accompagnato da altre linee.',
      'Fotografa il rapporto con angoli, solai, aperture e materiali diversi.',
      'Annota macchie, umidità, distacchi o rigonfiamenti soltanto come elementi visibili.',
      'Riporta se la parete è stata modificata, ripristinata o tinteggiata di recente.',
    ],
    limitsTitle: 'Non esiste una lettura automatica dell’orizzontale',
    limits: [
      'La direzione non dice se la crepa sia superficiale, passante o legata a un elemento specifico.',
      'Un’immagine isolata non chiarisce il rapporto tra la parete e gli altri elementi dell’immobile.',
      'Non si può dedurre online la necessità di lavori, consolidamenti o controlli particolari per un caso individuale.',
    ],
    verificationTitle: 'Quando può servire un confronto sul posto',
    verification: [
      'Se la linea è comparsa da poco, ti sembra in evoluzione o presenta distacchi e umidità, raccogli le osservazioni e valuta un confronto con un professionista qualificato.',
      'La verifica può esaminare il rapporto con materiali, aperture, solai e altre parti dell’immobile; eventuali controlli dipendono da ciò che viene rilevato.',
    ],
    faq: [
      { question: 'La lunghezza della crepa permette di capire la causa?', answer: 'No. La lunghezza è un dato descrittivo, ma va collegata a posizione, materiali e storia dell’edificio.' },
      { question: 'Devo controllare la parete ogni giorno?', answer: 'Puoi conservare fotografie datate e annotazioni quando noti cambiamenti, senza trasformare il monitoraggio in una valutazione tecnica.' },
      { question: 'L’umidità spiega sempre una crepa orizzontale?', answer: 'No. Può essere un elemento di contesto da riferire, ma non dimostra da sola un rapporto di causa.' },
    ],
  },
  {
    slug: 'crepe-sopra-porte-finestre',
    title: 'Crepe sopra porte e finestre: come descrivere la posizione',
    metaTitle: 'Crepe sopra porte e finestre: cosa osservare',
    description: 'Crepe sopra porte e finestre: posizione, contesto delle aperture, osservazioni utili e limiti della valutazione online.',
    eyebrow: 'Crepe vicino alle aperture',
    lead: 'Quando una crepa compare sopra una porta o una finestra, il primo dato utile è il suo rapporto con l’apertura. La posizione da sola non permette di stabilire quale elemento sia coinvolto.',
    shortAnswer: [
      'Segnala se la linea segue il bordo superiore, parte dagli angoli, attraversa l’intonaco sopra l’apertura o si estende verso la parete. Sono descrizioni più utili di un’etichetta sulla causa.',
      'Annota anche il tipo di parete, l’età approssimativa dell’apertura, eventuali lavori e se porta o finestra funzionano diversamente secondo la tua osservazione.',
    ],
    contextTitle: 'L’apertura è il riferimento da raccontare',
    contextIntro: 'Porte e finestre interrompono una parete e aiutano a indicare con precisione dove si trova una linea. Il loro ruolo nel contesto va però valutato sul posto.',
    possibleCauses: [
      { title: 'Bordo dell’apertura', text: 'La linea può essere vicina a un architrave, a uno stipite o alla finitura dell’imbotte: annota quale parte si vede.' },
      { title: 'Ripristini e modifiche', text: 'Sostituzioni, allargamenti, chiusure o tracce di lavori attorno all’apertura cambiano la storia locale della parete.' },
      { title: 'Materiali non uniformi', text: 'Muratura, intonaco, cartongesso e controtelai possono avere comportamenti e finiture differenti; la foto non basta per identificarli tutti.' },
      { title: 'Movimenti d’uso e ambiente', text: 'Uso dell’infisso, umidità e variazioni ambientali possono essere riferiti come contesto, senza considerarli una spiegazione certa.' },
    ],
    observations: [
      'Indica se la crepa è sopra, accanto o in corrispondenza dell’apertura e da quale lato si estende.',
      'Descrivi se parte da un angolo, segue un bordo o attraversa una superficie più ampia.',
      'Segnala se porta o finestra si aprono e si chiudono come al solito, riportando solo la tua osservazione.',
      'Fotografa l’intera apertura e poi il dettaglio, includendo il contesto della stanza.',
      'Annota modifiche, sostituzioni, umidità o ripristini effettuati in quella zona.',
    ],
    limitsTitle: 'Il rapporto con una porta non identifica la causa',
    limits: [
      'La vicinanza a un’apertura è un dato geometrico: non permette di distinguere da sola tra finitura, supporto e altri elementi.',
      'Il funzionamento percepito di un infisso può avere spiegazioni diverse e non equivale a una diagnosi dell’edificio.',
      'Solo una valutazione sul posto può stabilire quali verifiche siano pertinenti; online non si può indicare un intervento necessario.',
    ],
    verificationTitle: 'Come preparare il contesto dell’apertura',
    verification: [
      'Raccogli foto dell’intera parete, dettagli dell’apertura e una cronologia di lavori o cambiamenti d’uso.',
      'Se noti cambiamenti della linea o del funzionamento di porta e finestra, puoi chiedere tempestivamente un parere a un professionista qualificato, soprattutto se ci sono condizioni che ti sembrano richiedere attenzione.',
    ],
    faq: [
      { question: 'Una crepa che parte dall’angolo di una finestra ha una causa certa?', answer: 'No. La posizione orienta la descrizione, ma non basta a stabilire cosa stia accadendo nella parete.' },
      { question: 'Devo forzare la porta per verificare se funziona?', answer: 'No. Non fare prove che possano creare rischi o danni: annota semplicemente ciò che accade nell’uso normale.' },
      { question: 'Quali foto sono più utili?', answer: 'Una vista dell’ambiente, una vista completa dell’apertura e dettagli ravvicinati con la data aiutano a documentare il contesto.' },
    ],
  },
  {
    slug: 'crepe-muri-esterni',
    title: 'Crepe sui muri esterni: esposizione, facciata e contesto',
    metaTitle: 'Crepe sui muri esterni: osservazioni utili sulla facciata',
    description: 'Crepe sui muri esterni: come annotare facciata, esposizione, acqua e lavori senza fare diagnosi online.',
    eyebrow: 'Dove compare la crepa',
    lead: 'Una crepa su un muro esterno va descritta insieme alla facciata, all’esposizione e alle condizioni visibili. L’aspetto dall’esterno non consente da solo di sapere cosa avviene negli strati sottostanti.',
    shortAnswer: [
      'Indica su quale lato dell’edificio si trova, a che altezza, vicino a quali elementi e se interessa intonaco, rivestimento o giunti visibili. Evita di definire la causa sulla base della sola superficie.',
      'Acqua, esposizione, manutenzione e lavori recenti sono informazioni di contesto da raccogliere. Se la zona è difficile da raggiungere, non arrampicarti e non rimuovere materiali.',
    ],
    contextTitle: 'La facciata racconta condizioni diverse',
    contextIntro: 'Il muro esterno è esposto a pioggia, sole, sbalzi termici e manutenzioni. Questi elementi possono essere descritti e poi valutati insieme al resto dell’edificio.',
    possibleCauses: [
      { title: 'Rivestimenti e intonaci', text: 'La discontinuità può essere nella finitura esterna o in un rivestimento: la profondità non è leggibile con sicurezza a distanza.' },
      { title: 'Acqua e drenaggio', text: 'Grondaie, pluviali, ristagni e tracce di umidità possono arricchire il contesto, senza dimostrare un nesso causale.' },
      { title: 'Esposizione e manutenzione', text: 'Orientamento della facciata, sole, gelo e ripristini sono aspetti che il sopralluogo può considerare.' },
      { title: 'Elementi collegati', text: 'Balconi, parapetti, serramenti, giunti e raccordi vanno localizzati se la crepa è vicina a essi.' },
    ],
    observations: [
      'Indica la facciata o il lato dell’edificio, il piano e l’altezza approssimativa.',
      'Descrivi se la linea è nell’intonaco, in un rivestimento, vicino a un giunto o accanto a un elemento sporgente.',
      'Annota macchie, colature, distacchi o vegetazione solo se sono chiaramente visibili.',
      'Segnala pioggia recente, problemi a grondaie o pluviali e lavori di facciata già eseguiti.',
      'Fotografa da una distanza sicura; non usare scale o strumenti per raggiungere la zona senza adeguate condizioni.',
    ],
    limitsTitle: 'La facciata non mostra tutto l’edificio',
    limits: [
      'La superficie esterna può nascondere il rapporto tra rivestimento, supporto e altri elementi costruttivi.',
      'Una macchia o un distacco può avere contesti diversi: non è possibile attribuire online una causa o un livello di rischio.',
      'Non si può stabilire da una foto se servano ripristini, opere locali o interventi su altre parti dell’immobile.',
    ],
    verificationTitle: 'Sicurezza prima dell’osservazione ravvicinata',
    verification: [
      'Per elementi alti, distacchi o zone non raggiungibili, osserva soltanto da una posizione sicura e rivolgiti a un professionista qualificato.',
      'Una verifica può mettere in relazione facciata, acqua, manutenzione e parti interne; se temi una condizione che richiede attenzione urgente, contatta tempestivamente un professionista o le autorità competenti.',
    ],
    faq: [
      { question: 'Posso staccare l’intonaco per vedere meglio?', answer: 'No: evita rimozioni o prove improvvisate. Documenta ciò che è visibile e lascia gli accertamenti a chi opera in sicurezza.' },
      { question: 'La pioggia causa sempre le crepe esterne?', answer: 'La pioggia può essere un elemento da valutare, ma non dimostra da sola l’origine della discontinuità.' },
      { question: 'Come fotografo una crepa in alto?', answer: 'Da terra e senza esporti a rischi, includendo facciata, piano e riferimenti riconoscibili. Non usare la foto per dedurre la profondità.' },
    ],
  },
  {
    slug: 'crepe-muri-interni',
    title: 'Crepe sui muri interni: ambiente, finiture e lavori da annotare',
    metaTitle: 'Crepe sui muri interni: cosa osservare in casa',
    description: 'Crepe sui muri interni: guida per descrivere ambiente, finiture, umidità e lavori recenti senza diagnosi online.',
    eyebrow: 'Dove compare la crepa',
    lead: 'Una crepa su una parete interna si osserva meglio considerando la stanza e la finitura in cui compare. La vista da un solo ambiente non basta a identificare l’origine.',
    shortAnswer: [
      'Annota in quale locale si trova, se la parete confina con l’esterno o con un altro ambiente, quale rivestimento presenta e se ci sono stati lavori recenti.',
      'Umidità, uso della stanza, mobili e impianti possono essere contesto. Riporta ciò che vedi o ricordi, lasciando la valutazione a un professionista qualificato.',
    ],
    contextTitle: 'Partire dalla stanza, non dall’interpretazione',
    contextIntro: 'Le pareti interne possono avere pitture, intonaci, piastrelle o rivestimenti diversi. Descrivere la stanza aiuta a non confondere un segno superficiale con una conclusione tecnica.',
    possibleCauses: [
      { title: 'Finitura interna', text: 'Pittura, intonaco, cartongesso o rivestimento possono mostrare linee e distacchi con aspetti differenti.' },
      { title: 'Umidità e condensa', text: 'Macchie, odori o umidità percepita sono informazioni utili da riportare, non una spiegazione già verificata.' },
      { title: 'Tracce e impianti', text: 'Fori, scanalature, tubazioni o lavori di manutenzione possono essere parte della storia della parete.' },
      { title: 'Rapporto con altri ambienti', text: 'La parete può confinare con un bagno, un vano scala, l’esterno o una stanza ristrutturata: indica il contesto se lo conosci.' },
    ],
    observations: [
      'Indica stanza, parete e rapporto con l’esterno, un bagno, un vano scala o altri locali.',
      'Descrivi il rivestimento e se la linea è accompagnata da sfogliamenti, macchie o distacchi visibili.',
      'Segnala mobili o oggetti che coprono parte della parete, senza spostarli se non è necessario.',
      'Annota lavori, forature, impianti o cambi di tinteggiatura recenti.',
      'Conserva foto datate con una vista della stanza e un dettaglio della crepa.',
    ],
    limitsTitle: 'Una parete interna è solo una parte del quadro',
    limits: [
      'La finitura che vedi non mostra sempre il supporto o il rapporto con la parete dall’altro lato.',
      'Umidità, macchie e funzionamento degli ambienti possono avere spiegazioni diverse da quelle immaginate.',
      'Online non si può concludere che sia coinvolta la struttura o suggerire un intervento specifico per la tua casa.',
    ],
    verificationTitle: 'Quando far leggere il contesto della stanza',
    verification: [
      'Se il segno persiste, cambia o si accompagna a umidità e distacchi, prepara una descrizione e valuta una verifica sul posto.',
      'Il professionista può correlare la parete con ambienti confinanti, materiali e lavori; gli approfondimenti dipendono dai rilievi reali.',
    ],
    faq: [
      { question: 'Una crepa interna è meno importante di una esterna?', answer: 'Non si può stabilire in base alla sola posizione interna o esterna. Servono contesto e valutazione del caso concreto.' },
      { question: 'La pittura può nascondere il problema?', answer: 'Può rendere più difficile confrontare l’aspetto nel tempo. Prima di ripristinare, documenta ciò che osservi se pensi possa essere utile.' },
      { question: 'Devo indicare la stanza nella richiesta?', answer: 'Sì. Locale, parete e rapporto con gli ambienti vicini sono riferimenti pratici per descrivere la situazione.' },
    ],
  },
  {
    slug: 'crepe-soffitto',
    title: 'Crepe sul soffitto: come osservare senza esporsi a rischi',
    metaTitle: 'Crepe sul soffitto: cosa osservare e quando chiedere aiuto',
    description: 'Crepe sul soffitto: posizione, finitura, infiltrazioni e sicurezza dell’osservazione, senza diagnosi a distanza.',
    eyebrow: 'Dove compare la crepa',
    lead: 'Una crepa sul soffitto richiede una descrizione prudente e un’osservazione dalla posizione più sicura possibile. La linea visibile non permette da sola di stabilire cosa ci sia sopra o dietro la finitura.',
    shortAnswer: [
      'Indica se è al centro del locale, vicino a una parete, a un angolo, a un punto luce o a un passaggio di impianti. Osserva anche macchie, rigonfiamenti o distacchi visibili senza toccare.',
      'Se noti materiale che si stacca, acqua o una condizione che potrebbe richiedere attenzione urgente, evita la zona e rivolgiti tempestivamente a un professionista qualificato o alle autorità competenti.',
    ],
    contextTitle: 'Il soffitto va osservato anche dal pavimento',
    contextIntro: 'La priorità è non creare un rischio durante la raccolta delle informazioni. Una foto scattata da terra e una descrizione dell’ambiente sono preferibili a prove o rimozioni improvvisate.',
    possibleCauses: [
      { title: 'Finiture e controsoffitti', text: 'Pittura, intonaco e controsoffitti possono presentare discontinuità diverse; la sola superficie non permette di distinguerle con certezza.' },
      { title: 'Acqua e impianti', text: 'Macchie o umidità vicino a un bagno, a un piano superiore o a un impianto sono dati da riferire, non diagnosi.' },
      { title: 'Raccordi e geometrie', text: 'Angoli, travi, cambi di quota e punti luce aiutano a localizzare la crepa rispetto al locale.' },
      { title: 'Lavori recenti', text: 'Rasature, controsoffitti, tinteggiature o passaggi di impianti possono essere parte del contesto da ricostruire.' },
    ],
    observations: [
      'Descrivi il punto del soffitto rispetto a pareti, angoli, travi e punti luce.',
      'Fotografa da terra, con una vista ampia e un dettaglio, senza salire su mobili o scale instabili.',
      'Segnala macchie, gocce, rigonfiamenti o materiale a terra solo se li osservi chiaramente.',
      'Annota se il locale è sotto un bagno, una terrazza, un tetto o un altro ambiente, se lo sai.',
      'Indica lavori, perdite o tinteggiature recenti nella zona.',
    ],
    limitsTitle: 'Il soffitto nasconde il contesto superiore',
    limits: [
      'La superficie non mostra automaticamente solai, intercapedini, impianti o ambienti sovrastanti.',
      'Una macchia o un distacco può richiedere attenzioni diverse: online non è possibile scegliere tra esse.',
      'Non è possibile stabilire a distanza se il soffitto sia sicuro o pericoloso; la sicurezza va valutata da chi può esaminare il luogo.',
    ],
    verificationTitle: 'Prima la sicurezza, poi la documentazione',
    verification: [
      'Non toccare, forare o raschiare la zona e non sostare sotto materiale che sembra distaccato. Se la situazione appare urgente, chiedi aiuto tempestivamente.',
      'Per una verifica ordinaria, prepara foto da terra, date, informazioni su acqua e lavori: il tecnico stabilirà come procedere.',
    ],
    faq: [
      { question: 'Posso toccare la crepa per capire se è profonda?', answer: 'È preferibile non fare prove o rimuovere materiale. Documenta ciò che è visibile e lascia gli accertamenti a un professionista.' },
      { question: 'Una macchia sul soffitto significa sempre una perdita?', answer: 'Può essere un indizio di acqua o di altro contesto, ma non permette da sola di stabilirne l’origine.' },
      { question: 'Quando devo allontanarmi dalla stanza?', answer: 'Se noti distacchi, caduta di materiale o condizioni che potrebbero richiedere attenzione urgente, evita la zona e contatta tempestivamente un professionista qualificato o le autorità competenti.' },
    ],
  },
  {
    slug: 'crepe-pavimento',
    title: 'Crepe sul pavimento: piastrelle, massetto e contesto da distinguere',
    metaTitle: 'Crepe sul pavimento: cosa osservare senza diagnosi',
    description: 'Crepe sul pavimento: come distinguere nella descrizione piastrelle, fughe e superfici, con limiti della valutazione online.',
    eyebrow: 'Dove compare la crepa',
    lead: 'Sul pavimento la linea può riguardare una piastrella, una fuga, un rivestimento continuo o un’altra superficie. Descrivere quale parte è visibile è il primo passo; la sola crepa non identifica ciò che sta sotto.',
    shortAnswer: [
      'Indica il materiale, il locale, la posizione e se la linea attraversa una singola piastrella o più elementi. Segnala anche dislivelli percepiti, ma senza trasformarli in una conclusione sul terreno o sulle fondazioni.',
      'Non sollevare piastrelle né fare prove improvvisate. Fotografie, data, lavori recenti e presenza di acqua possono aiutare un professionista a leggere il contesto.',
    ],
    contextTitle: 'Prima distinguere la superficie visibile',
    contextIntro: 'Un pavimento è composto da strati e materiali che non sempre si possono riconoscere a vista. La descrizione deve partire da ciò che l’utente può osservare senza interventi.',
    possibleCauses: [
      { title: 'Piastrella o fuga', text: 'Una linea può seguire un giunto oppure attraversare un elemento; indica quale delle due situazioni sembra visibile.' },
      { title: 'Rivestimenti continui', text: 'Resine, parquet, laminati e altre finiture possono mostrare segni diversi, da descrivere insieme alla posa e all’età.' },
      { title: 'Acqua e ambiente', text: 'Infiltrazioni, umidità o variazioni di temperatura sono contesto da riferire, non spiegazioni automatiche.' },
      { title: 'Lavori e carichi d’uso', text: 'Ristrutturazioni, cambi di pavimentazione e uso del locale possono aiutare a ricostruire la storia della superficie.' },
    ],
    observations: [
      'Indica il locale e il materiale visibile: piastrella, fuga, parquet, rivestimento continuo o altro.',
      'Descrivi se la linea riguarda un solo elemento, più elementi o il raccordo con una parete.',
      'Annota avvallamenti, rigonfiamenti o dislivelli solo come percezioni, senza associarli a una causa.',
      'Segnala acqua, umidità, rumori o distacchi visibili, evitando prove che possano danneggiare il pavimento.',
      'Ricorda posa, sostituzioni e lavori recenti, se disponibili.',
    ],
    limitsTitle: 'La superficie non mostra gli strati sottostanti',
    limits: [
      'Una piastrella o una fuga non rappresenta necessariamente ciò che avviene nel sottofondo o nella struttura.',
      'La percezione di un pavimento fuori livello è un’osservazione soggettiva e va distinta da una misurazione tecnica.',
      'Online non è possibile concludere che esista un cedimento o che serva un intervento sul pavimento, sul terreno o sulle fondazioni.',
    ],
    verificationTitle: 'Come preparare una verifica del pavimento',
    verification: [
      'Non sollevare o rompere elementi per cercare la causa. Fotografa la superficie e indica la posizione nella pianta o nella stanza.',
      'Se il segno cambia, compare acqua o noti condizioni che potrebbero richiedere attenzione, chiedi un confronto sul posto a un professionista qualificato.',
    ],
    faq: [
      { question: 'Una piastrella rotta dimostra un problema sotto il pavimento?', answer: 'No. Può avere contesti diversi e la sola rottura non permette di stabilire cosa ci sia sotto.' },
      { question: 'Come descrivo un pavimento che sembra inclinato?', answer: 'Scrivi dove lo percepisci e in quali condizioni, specificando che si tratta di un’osservazione e non di una misurazione tecnica.' },
      { question: 'È utile indicare quando è stato posato?', answer: 'Sì, se lo sai: posa, sostituzioni e lavori sono elementi di storia utili per il sopralluogo.' },
    ],
  },
  {
    slug: 'crepe-casa-vecchia',
    title: 'Crepe in una casa vecchia: la storia dell’edificio da ricostruire',
    metaTitle: 'Crepe in casa vecchia: storia e osservazioni utili',
    description: 'Crepe in una casa vecchia: quali informazioni sulla storia dell’edificio raccogliere e quali limiti ha una valutazione online.',
    eyebrow: 'Contesto dell’immobile',
    lead: 'In una casa vecchia la data di costruzione è solo una parte del contesto. Modifiche, manutenzioni, materiali e periodi di abbandono possono essere informazioni più utili da ricostruire.',
    shortAnswer: [
      'L’età dell’edificio non permette di stabilire da sola la causa di una crepa né se una situazione sia sicura. Occorre descrivere dove compare e cosa è successo nel tempo.',
      'Raccogli documenti e ricordi disponibili su ristrutturazioni, ampliamenti, cambi d’uso, infiltrazioni e ripristini, distinguendo i fatti dalle ipotesi.',
    ],
    contextTitle: 'Vecchio non significa una cosa sola',
    contextIntro: 'Edifici della stessa epoca possono avere materiali, trasformazioni e condizioni molto diverse. Per questo la storia dell’immobile va raccontata senza usare l’età come diagnosi.',
    possibleCauses: [
      { title: 'Trasformazioni nel tempo', text: 'Ampliamenti, aperture, chiusure di vani e cambi di distribuzione possono modificare il contesto locale.' },
      { title: 'Materiali e finiture', text: 'Tecniche costruttive e rivestimenti presenti in una casa datata possono essere diversi da una stanza all’altra.' },
      { title: 'Manutenzione e acqua', text: 'Riparazioni, coperture, impianti e infiltrazioni sono elementi della storia da mettere in ordine.' },
      { title: 'Uso dell’immobile', text: 'Periodi di inutilizzo, cambi d’uso o lavori recenti possono offrire informazioni da verificare.' },
    ],
    observations: [
      'Indica l’età approssimativa e, se possibile, quali parti dell’edificio sono originali o ristrutturate.',
      'Descrivi il locale, la parete o il pavimento in cui compare la crepa e se ci sono segni simili altrove.',
      'Annota ampliamenti, aperture, chiusure, sopraelevazioni o cambi di distribuzione che conosci.',
      'Raccogli informazioni su infiltrazioni, manutenzioni e periodi in cui la casa è rimasta inutilizzata.',
      'Conserva foto e documenti già disponibili, senza fare demolizioni o saggi autonomi.',
    ],
    limitsTitle: 'L’età non sostituisce il sopralluogo',
    limits: [
      'La data di costruzione non dice automaticamente quali materiali o modifiche siano presenti oggi.',
      'Una crepa in un edificio storico o datato può avere contesti differenti; non è possibile leggerla in modo affidabile dalla sola immagine.',
      'Online non si può concludere che una casa sia sicura o pericolosa, né prescrivere opere di consolidamento.',
    ],
    verificationTitle: 'Ricostruire una cronologia utile',
    verification: [
      'Prepara una cronologia con date approssimative, lavori conosciuti, fotografie e cambiamenti osservati. Anche ciò che non sai può essere indicato come non noto.',
      'Un professionista qualificato può esaminare storia e stato attuale dell’immobile e stabilire quali ulteriori verifiche siano appropriate.',
    ],
    faq: [
      { question: 'Le crepe sono normali nelle case vecchie?', answer: 'Non è corretto definirle normali o anomale solo in base all’età. La situazione va descritta e valutata nel contesto reale.' },
      { question: 'Devo sapere l’anno esatto di costruzione?', answer: 'No. Anche un periodo approssimativo e la storia dei lavori conosciuti possono essere utili, purché siano presentati come informazioni disponibili.' },
      { question: 'Una ristrutturazione recente spiega la crepa?', answer: 'Può essere un elemento da riferire, ma non dimostra da sola un rapporto di causa.' },
    ],
  },
  {
    slug: 'crepe-che-aumentano',
    title: 'Crepe che aumentano: come annotare i cambiamenti nel tempo',
    metaTitle: 'Crepe che aumentano: monitoraggio delle osservazioni',
    description: 'Crepe che sembrano aumentare: come documentare cambiamenti, date e contesto senza trasformare il monitoraggio in diagnosi.',
    eyebrow: 'Andamento nel tempo',
    lead: 'Dire che una crepa aumenta significa aver percepito un cambiamento tra momenti diversi. Documentare quando e come lo noti può essere utile, ma non stabilisce da solo la causa.',
    shortAnswer: [
      'Confronta fotografie datate scattate da punti simili e annota ciò che è cambiato secondo la tua osservazione. Evita di chiamare “aumento” una differenza dovuta solo a luce o prospettiva.',
      'Se il cambiamento è evidente, rapido o associato a distacchi, acqua o altre condizioni che potrebbero richiedere attenzione, chiedi tempestivamente una valutazione qualificata.',
    ],
    contextTitle: 'Il tempo aggiunge un dato, non una risposta',
    contextIntro: 'Una cronologia ben fatta aiuta a raccontare l’evoluzione percepita. Per essere utile deve distinguere misure affidabili, impressioni e condizioni diverse di osservazione.',
    possibleCauses: [
      { title: 'Confronti non omogenei', text: 'Luce, angolo della foto, pulizia o nuova pittura possono far sembrare diversa una superficie senza che il fenomeno sia cambiato nello stesso modo.' },
      { title: 'Variazioni ambientali', text: 'Stagione, umidità e temperatura possono coincidere con cambiamenti percepiti e vanno annotati come contesto.' },
      { title: 'Lavori o eventi', text: 'Interventi, vibrazioni, perdite o modifiche dell’ambiente possono essere date importanti nella cronologia.' },
      { title: 'Segni associati', text: 'Distacchi, macchie o difficoltà d’uso sono osservazioni separate da descrivere, senza sommarle in una diagnosi.' },
    ],
    observations: [
      'Scrivi la data della prima osservazione e delle fotografie successive, indicando se il punto di ripresa è simile.',
      'Descrivi che cosa sembra diverso: lunghezza visibile, direzione, apertura apparente o finitura circostante.',
      'Annota luce, umidità, stagione, pulizie, tinteggiature e altri fattori che possono influire sul confronto.',
      'Segnala lavori, infiltrazioni, distacchi o cambiamenti nell’uso del locale avvenuti nello stesso periodo.',
      'Non usare chiodi, marcatori, stucco o strumenti improvvisati per “testare” la crepa.',
    ],
    limitsTitle: 'Un confronto fotografico ha dei limiti',
    limits: [
      'Prospettiva, luce e risoluzione possono alterare l’impressione di larghezza o continuità.',
      'Anche un cambiamento reale non indica da solo il materiale coinvolto, la causa o la soluzione.',
      'Il monitoraggio domestico non può dire se l’edificio sia sicuro o pericoloso e non sostituisce una valutazione sul posto.',
    ],
    verificationTitle: 'Quando non aspettare altri confronti',
    verification: [
      'Se il cambiamento ti sembra rapido, compare con distacchi o acqua, oppure la situazione potrebbe richiedere attenzione urgente, evita la zona se necessario e contatta tempestivamente un professionista qualificato o le autorità competenti.',
      'Negli altri casi, una cronologia ordinata può accompagnare una richiesta di verifica: il tecnico stabilirà se servono rilievi o controlli ulteriori.',
    ],
    faq: [
      { question: 'Come faccio a sapere se una crepa è davvero aumentata?', answer: 'Puoi confrontare foto datate scattate in condizioni simili e descrivere la percezione, senza presentare il confronto come una misurazione tecnica.' },
      { question: 'Devo segnare la crepa con una matita?', answer: 'Non è necessario e può alterare la superficie. Meglio conservare fotografie e note con data.' },
      { question: 'Un cambiamento richiede sempre un intervento?', answer: 'Non si può stabilire online. Il cambiamento è un motivo per raccogliere informazioni e, se opportuno, chiedere una valutazione qualificata.' },
    ],
  },
];

export const crepeClusterPages: CrepeClusterPage[] = [];

export const crepeClusterBySlug = Object.fromEntries(
  crepeClusterPages.map((page) => [page.slug, page]),
) as Record<string, CrepeClusterPage>;
