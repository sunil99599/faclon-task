import { NgModule } from '@angular/core';
// material design
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const data = [
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  LayoutModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatStepperModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
];
@NgModule({
  imports: [data],
  exports: [data],
  declarations: [],
})
export class AngularMaterialModule {}
