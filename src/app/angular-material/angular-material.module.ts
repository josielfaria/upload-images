import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatCardModule,
  ],
  providers: [ AngularMaterialModule ]
})
export class AngularMaterialModule { }
