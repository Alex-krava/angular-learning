import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Products } from '../services/products.service'

@Component({
    moduleId: module.id,
    selector: 'table-rows',
    templateUrl: './table-rows.component.html',
    styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
    inputs: ["rows"]
})
export class TableRowsComponent implements OnInit{
    productsFilter: any;
    categories: any;
    rows: number = 3;
    firstRow: boolean;
    secondRow: boolean;
    thirdRow: boolean;

    @Output()
    delete: EventEmitter<number> = new EventEmitter<any>();

    constructor(private dataProducts: Products) {
        this.productsFilter = this.dataProducts.getProduct();
        this.categories = this.dataProducts.getCategories();
    }

    ngOnInit() {
        this.getCountRows();
    }

    getCountRows() {
        this.firstRow = (this.rows >= 1) ? true : false;
        this.secondRow = (this.rows >= 2) ? true : false;
        this.thirdRow = (this.rows >= 3) ? true : false;
    }

    deleteProduct(id) {
        this.productsFilter = this.dataProducts.deleteProduct(id, this.productsFilter);
    }

    filterProducts(elem) {
        this.productsFilter = this.dataProducts.getProduct().filter(function (product) {
            if(product.category === elem.value) {
                return product;
            }
        });
    }

    addProductCatalog(product) {
        product.id = this.dataProducts.getProduct().length + 1;
        this.dataProducts.setProduct(product);
        this.productsFilter = this.dataProducts.getProduct();
    }
}