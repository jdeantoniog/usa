/* =============================================================
   COMPLEANNI
   Una riga per persona:  ["MM-GG", "Nome"],
   - Mese e giorno a due cifre: "03-11", non "3-11".
   - Ogni riga termina con una virgola (anche l'ultima va bene).
   - Facoltativo, in fondo: { avisar: false } per non avvisare nei giorni prima;
     { texto: "..." } e { lista: "..." } per cambiare il messaggio del giorno e il testo del calendario.
   - I compleanni si vedono in entrambi i fusi orari: da quando inizia il giorno in Italia
     a quando finisce negli USA.
   Ogni compleanno compare nel calendario, in "Prossime date",
   nel conto alla rovescia e con un messaggio e coriandoli quel giorno.
   ============================================================= */

window.CUMPLES = [
  // Esempio (togli le due barre per attivarlo):
  // ["03-11", "Mamma"],
];
