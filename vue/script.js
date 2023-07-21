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
                    done:  true
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
       
    },
});
console.log(app);
app.mount("#app")