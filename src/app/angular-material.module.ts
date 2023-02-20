import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    exports: [
        MatToolbarModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatDividerModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        CdkTableModule,
    ]
})

export class AngularMaterialModule {
}
