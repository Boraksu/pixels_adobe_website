import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ServerInterceptor} from './interceptor';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// angular material module
import { AngularMaterialModule } from './angular-material.module';

// Components
import { StockModule } from './stock/stock.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        AngularMaterialModule,
        StockModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true}],
    bootstrap: [AppComponent],
    entryComponents: [ErrorComponent]
})

export class AppModule {
}
