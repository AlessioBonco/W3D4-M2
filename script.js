// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


//ESERCIZIO7
function cambiaTitolo() {
    document.querySelector('h1').textContent = "EXODIA2.0";
  }


//ESERCIZIO8
  function cambiaColoreSfondo(colore) {
    document.body.style.backgroundColor = colore;
  }


//ESERCIZIO 9
  function cambiaIndirizzi() {
   let links = document.querySelectorAll('a');

    links.forEach(link => {
      link.href = "https://www.google.com/search?q=learn.epicode&oq=&aqs=chrome.2.35i39i362l8.10274742j0j7&sourceid=chrome&ie=UTF-8"; // Imposta un nuovo indirizzo fittizio
    });
  }


//ESERCIZIO10
  function aggiungiClasseLinkAmazon() {
    // Seleziona tutti i link nella tabella
    let links = document.querySelectorAll('table a');
    // Itera sui link e verifica se contengono "amazon" nell'URL
    links.forEach(link => {
      if (link.href.includes('amazon')) {
        // Aggiunge la classe "amazon-link" ai link Amazon
        link.classList.add('amazon-link');
      }
    });
  }


//ESERCIZIO 11
  function toggleVisibilitaImmagini() {
    let immagini = document.querySelectorAll('table img');
    immagini.forEach(immagine => {
      if (immagine.classList.contains('invisibile')) {
        // Se la classe è presente, la rimuove per renderla visibile
        immagine.classList.remove('invisibile');
      } else {
        // Se la classe non è presente, la aggiunge per renderla invisibile
        immagine.classList.add('invisibile');
      }
    });
  }
      

  //ESERCIZIO 12 
      function generaColoreCasuale() {
        let lettere = '0123456789ABCDEF';
        let colore = '#';
        for (let i = 0; i < 6; i++) {
          colore += lettere[Math.floor(Math.random() * 16)];
        }
        return colore;
      }

      function cambiaColorePrezzi() {
        let prezzi = document.querySelectorAll('.prezzo');
        prezzi.forEach(prezzo => {
          prezzo.style.color = generaColoreCasuale();
        });
      }






