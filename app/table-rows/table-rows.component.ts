import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

const Products = [
    { id: 1, name : "product 1", price : 100 },
    { id: 2, name : "product 2", price : 200 },
    { id: 3, name : "product 3", price : 300 },
    { id: 4, name : "product 4", price : 400 },
    { id: 5, name : "product 5", price : 500 },
    { id: 6, name : "product 6", price : 600 },
    { id: 7, name : "product 7", price : 700 },
    { id: 8, name : "product 8", price : 800 },
    { id: 9, name : "product 9", price : 900 },
    { id: 10, name : "product 10", price : 1000 }
];

@Component({
    moduleId: module.id,
    selector: 'table-rows',
    templateUrl: './table-rows.component.html',
    styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
    inputs: ["rows"]
})
export class TableRowsComponent implements OnInit{
    products: any;
    newProducts: any;
    rows: number = 3;
    firstRow: boolean;
    secondRow: boolean;
    thirdRow: boolean;

    @Output()
    delete: EventEmitter<number> = new EventEmitter<any>();

    constructor() {
        this.products = Products;
    }

    ngOnInit() {
        this.getCountRows();
    }

    getCountRows() {
        this.firstRow = (this.rows >= 1) ? true : false;
        this.secondRow = (this.rows >= 2) ? true : false;
        this.thirdRow = (this.rows >= 3) ? true : false;
    }

    getProducts() {
        return this.products;
    }

    setProducts(products) {
        this.products = products;
    }

    deleteProduct(id) {
        this.newProducts = this.getProducts().filter(function (elem) {
            if(elem.id !== id) {
                return elem;
            }
        });
        this.setProducts(this.newProducts);
        this.newProducts = '';
        console.log(`Element ${id} deleted`);
    }
}