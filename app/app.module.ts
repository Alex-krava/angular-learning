import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { MyTableComponent }  from './my-table/my-table.component';
import { GreetingsComponent }  from './greetings/greetings.component';
import { TableRowsComponent }  from './table-rows/table-rows.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: "", component: GreetingsComponent},
            {path: "dz2", component: MyTableComponent}
        ])
    ],
    declarations: [ AppComponent,
                    MyTableComponent,
                    GreetingsComponent,
                    TableRowsComponent
                    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
