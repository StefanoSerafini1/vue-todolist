//Creare un nuovo todo attraverso un campo di testo
//Rimuovere uno specifico todo attraverso il click su un icona per la rimozione nel todo stesso


const todolist = new Vue ({
    el: '#tot',
    data: {
        lista: [
              'fare la spesa',
              'buttare la spazzatura',
              'studiare',
              'controllare bollette'
        ],
        nuovaAttivita: '',
    },

    methods: {
      //funzione per aggiunta nuova attivita
        aggAttivita() {
           if (this.nuovaAttivita.trim() != ''){
               this.lista.push( this.nuovaAttivita );

               this.nuovaAttivita= '';
            }
        }
    }

});
