import { Component } from '@angular/core';

const VALUES = [
    "Hello World",
    "Привет Мир",
    "Привіт Світ",
    "Hola Mundo",
    "Bonjour le monde",
    "Hallo Welt",
    "Ciao mondo",
    "Witaj świecie",
    "Hej världen",
    "Pozdravljen, svet",
    "Прывітанне Сусвет"];

@Component({
    moduleId: module.id,
    selector: 'greetings',
    templateUrl: './greetings.component.html'
})
export class GreetingsComponent {
    greetings: any;

    constructor() {
        this.greetings = VALUES;
    }
}