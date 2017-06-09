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
    selector: 'app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    greetings: any;

    constructor() {
        this.greetings = VALUES;
    }
}
