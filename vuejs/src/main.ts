import Vue from "vue";
import ButtonGreen from "./components/ButtonGreen.vue";

let vue = new Vue({
    el: "#app",
    template: `
        <button-green>green</button-green>
    `,
    components: {
        ButtonGreen
    }
});