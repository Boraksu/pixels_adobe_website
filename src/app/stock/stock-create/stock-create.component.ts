import { Component } from '@angular/core';
import { StocksService } from '../stocks.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-stock-create',
    templateUrl: './stock-create.component.html',
    styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent {
    panelOpenState = false;

    constructor(public stocksService: StocksService) {
    }

    onAddStock(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.stocksService.addStock(form.value.name, form.value.price, form.value.stock);
        form.resetForm();
    }
}
