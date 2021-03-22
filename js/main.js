var app = new Vue ({
    el: "#root",
    data: {
        message: "",
        items: [
            "Buy milk",
            "Clean the car",
            "Do exercise"
        ]
    },
/*     methods: {

        addItem(item) {
            this.items.push(item);
        },

        rmvItem(index) {
            this.items.splice(index, 1);
        }
    } */
});

console.log(app.data);