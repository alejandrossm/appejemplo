import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PieComponent } from './pie/pie.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';




@NgModule({
  declarations: [EncabezadoComponent, PieComponent],
  exports:[EncabezadoComponent, PieComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
