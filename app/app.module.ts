import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { MyTableComponent }  from './my-table/my-table.component';
import { GreetingsComponent }  from './greetings/greetings.component';
import { TableRowsComponent }  from './table-rows/table-rows.component';
import { AddProduct }  from './add-product/add-product.component';
import { Products }  from './services/products.service';
import { Data }  from './services/data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: "", component: GreetingsComponent},
            {path: "dz4", component: MyTableComponent}
        ])
    ],
    declarations: [ AppComponent,
                    MyTableComponent,
                    GreetingsComponent,
                    TableRowsComponent,
                    AddProduct
                    ],
    providers: [ Products, Data ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
