
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public errorMessage: {message: string}) {
    }

    ngOnInit(): void {
    }

}