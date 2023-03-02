import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockCreateComponent } from './stock-create/stock-create.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [StockListComponent, StockCreateComponent],
    imports: [AngularMaterialModule, FormsModule, CommonModule],
    exports: [
        StockCreateComponent,
        StockListComponent
    ]
})
export class StockModule {}
