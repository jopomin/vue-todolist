var app = new Vue ({
    el: "#root",
    data: {
        newItem: "",
        items: [
            "8 Peperoni",
            "2 litri di latte",
            "200gr di Prosciutto Crudo",
            "200gr di Parmigiano Grattugiato",
            "3 bottiglie di passata"
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

        clearAll() {
            this.items = [];
        }
    }
});

Vue.config.devtools = true;