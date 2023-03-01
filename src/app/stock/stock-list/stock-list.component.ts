
import {Component, OnInit, ViewChild} from '@angular/core';
import {Stock} from '../stock.model';
import {StocksService} from '../stocks.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
    stocks: Stock[] = [];
    public stocksSub: Subscription;
    dataSource: MatTableDataSource<Stock>;

    constructor(public stocksService: StocksService) {
    }

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    ngOnInit(): void {
        this.stocksService.getStocks();
        this.stocksSub = this.stocksService.getPostUpdateListener()
            .subscribe((stocks: Stock[]) => {
                this.stocks = stocks;
                this.dataSource = new MatTableDataSource(this.stocks);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
    }

}