
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Stock} from './stock.model';
import {environment} from '../../environments/environment';

const URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class StocksService {
    private stocks: Stock[] = [];
    private stocksUpdated = new Subject<Stock[]>();

    constructor(private http: HttpClient) {
    }

    getStocks() {
        return this.http
            .get<{ stock: Stock[] }>(URL)
            .subscribe(stockData => {
                this.stocks = stockData.stock;
                this.stocksUpdated.next([...this.stocks]);
            });
    }

    getPostUpdateListener() {
        return this.stocksUpdated.asObservable();
    }

    addStock(name: string, price: number, amount: number) {
        const stock = {name: name, price: price, stock: amount};
        this.http
            .post(URL, stock)
            .subscribe(responseData => {
                this.stocks.push(<Stock>responseData);
                this.stocksUpdated.next([...this.stocks]);
            });
    }
}