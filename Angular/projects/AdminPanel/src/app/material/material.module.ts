import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatTableModule,
} from '@angular/material';


const Material =[
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  MatTableModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule { }
