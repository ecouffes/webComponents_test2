export default class ButtonRed extends HTMLElement {
    constructor() {
        super();
    }

    // Templates
    static get template() {
        return `
            <style>
            button {
                background-color: palevioletred;
                color: #fff;
                margin: .5em;
                padding: 1em;
                font-size: 16px;
                border-radius: .5em;
                cursor: pointer;
                border: none;
            }
            </style>
            <button>
                <slot></slot>
            </button>
            `;
    }

    connectedCallback() {
        // Shadow DOM: #shadow-root(open)
        this.attachShadow({
            mode: 'open'
        }).innerHTML = ButtonRed.template;
    }
};
