let persona = {
    nome: "Nicole",
    cognome: "Augusti",
    età: 29,
   
    salutare: function () {
       console.log ("Ciao, il mio nome è "+ this.nome +".")    
    }

}

persona.salutare();


let agenda = {
    listaContatti: ["Nicole Augusti 3453362369", "Luca Tiengo 3395742567", "Giulia Freguglia 3493357896", "Elisa Furlan 4567352673"],
    
    mostraTuttiContatti: function () {
        for(var i = 0; i < this.listaContatti.length; i++){

		    console.log(this.listaContatti[i]);
        }
    },
    

    mostraSingoloContatto: function (indice) {
        
        console.log("Il contatto che vuoi visualizzare è il seguente:" + this.listaContatti[indice])
    },

    cancellaSingoloContatto: function (indice,nDaEliminare) {
        console.log("Il contatto eliminato è il seguente:" + this.listaContatti.splice (indice,nDaEliminare))
    },

    aggiungiNuovoContatto: function () {
        this.listaContatti.push ("Giordano Bruno 334455566");
        console.log("Ho aggiunto un nuovo contatto. Ecco la lista aggiornata");
        this.mostraTuttiContatti();
    },

    modificaContattoEsistente: function (indice,contattoModificato) {
       console.log("Il contatto da modificare è il seguente:" + this.listaContatti[indice]);
       this.listaContatti[indice] = contattoModificato;
       console.log("Il contatto è stato modificato in:" + this.listaContatti[indice]);

    }



}

agenda.mostraTuttiContatti();

agenda.aggiungiNuovoContatto();

agenda.mostraSingoloContatto(2);

agenda.cancellaSingoloContatto(1,1);

agenda.modificaContattoEsistente(1, "luca bello");
