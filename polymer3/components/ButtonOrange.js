// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the MyApp symbol from the module
export default class ButtonOrange extends PolymerElement {
    constructor() {
        super();
        this.name = 'Polymer 3.0 preview';
    }

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `
            <style>
            button {
                background-color: darkorange;
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
            <p>[[name]]</p>
            `;
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}