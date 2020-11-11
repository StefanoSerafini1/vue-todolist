//Creare un nuovo todo attraverso un campo di testo
//Rimuovere uno specifico todo attraverso il click su un icona per la rimozione nel todo stesso


const todolist = new Vue ({
    el: '#tot',
    data: {
        index: 0,
        attivita: [
             'fare la spesa',
             'buttare la spazzatura',
             'studiare',
             'controllare bollette'
        ],
        nuovaAttivita: ''
    },

    methods: {
      //funzione per aggiunta nuova attivita
        aggAttivita() {
           if (this.nuovaAttivita.trim() != ''){
               this.attivita.push( this.nuovaAttivita );

               this.nuovaAttivita= '';
            }
        },
        cancAttivita(index){
            this.attivita.splice(index,1);
        },
        cancAll(attivita){
            this.attivita.splice(attivita);
        },
        submit() {
          this.attivita.push(this.nuovaAttivita);
          this.nuovaAttivita ='';
        }
    }

});
