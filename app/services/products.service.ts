import { Injectable } from "@angular/core";
import { Data } from "./data.service";

@Injectable()
export class Products {

    private products;

    private categories = [
        'Category 1',
        'Category 2',
        'Category 3'
    ];

    private newProducts:object[];


    constructor(private data:Data) {
        this.products = this.data;
    }

    public getProduct() {
        return this.products;
    }

    public getCategories() {
        return this.categories;
    }

    public getProducts() {
        return this.products;
    }

    public setProducts(products) {
        this.products = products;
    }

    public setProduct(product) {
        this.products.push(product);
    }

    public deleteProduct(id, filterProducts) {
        this.newProducts = this.filterDeleteProducts(filterProducts, id);
        this.setProducts(this.filterDeleteProducts(this.getProducts(), id));
        console.log(`Element ${id} deleted`);

        return this.newProducts;
    }

    private filterDeleteProducts(products, id) {
        return products.filter(function (elem) {
            if(elem.id !== id) {
                return elem;
            }
        });
    }
}