var app = new Vue ({
    el: "#root",
    data: {
        newItem: "",
        items: [
            "Buy milk",
            "Clean the car",
            "Do exercise"
        ]
    },
    methods: {

        addItem() {
            this.items.push(this.newItem);
            this.newItem = "";
        },

        rmvItem(index) {
            this.items.splice(index, 1);
        },
    }
});

Vue.config.devtools = true;