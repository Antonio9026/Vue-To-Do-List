const app = Vue.createApp({
    data() {
        return {
            newTask: {
                id: "",
                text: "",
                done: false
            },

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
                },
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

        //  funzione pr aggiungere la task 
        addTask() {
            // creo un clone dell'oggetto in modo da perdere la reattività§
            const cloneTask = { ...this.newTask };
            this.tasks.push(cloneTask);
        },

        // creo funzione per taskItem done/al click se è false diventa true e viceversa in modo da cambiare la classe
        ifDoneUnDone(i) {
            this.tasks[i].done = !this.tasks[i].done;

        }


    },
});
console.log(app);
app.mount("#app")





