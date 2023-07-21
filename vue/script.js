const app = Vue.createApp({
    data() {
        return {

            tasks: [

                {
                    id: 1,
                    text: "to-do esempio 1",
                    done: true
                }, {
                    id: 2,
                    text: "to-do esempio 2",
                    done: false
                }, {
                    id: 3,
                    text: "to-do esempio 3",
                    done: true
                }, {
                    id: 4,
                    text: "to-do esempio 4",
                    done: false
                }, {
                    id: 5,
                    text: "to-do esempio 5",
                    done: true
                }
            ],

        };

    },
    methods: {

        // funzione al click per cancellare una task alla volta 
        taskDelete(taskId) {

            //  dichiaro la variabile indexToDElete con valore la funzione findIndex per recuperare l'elemento corrispondenrte alla condizione che andiamo a scrivere 
            let indexToDElete = this.tasks.findIndex((tasksItem) => tasksItem.id === taskId);
            //   console.log(indexToDElete);

            // utilizzo splice per cancellare la task corrispondente all' indice della task cliccata(il numero sta per la quantità di elementi da cancellare)
            this.tasks.splice(indexToDElete, 1)
        },

    },
});
console.log(app);
app.mount("#app")