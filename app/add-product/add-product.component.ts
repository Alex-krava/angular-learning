import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css',
                'add-product.component.css']
})

export class AddProduct {

    product: any;
    price: any;
    category: any;

    @Output() addProductEvent = new EventEmitter();

    constructor() {}

    addProduct() {
        this.addProductEvent.emit(
            {
                name: this.product,
                price: this.price,
                category: this.category
            }
        );

        this.product = '';
        this.price = '';
        this.category = '';
    }
}
