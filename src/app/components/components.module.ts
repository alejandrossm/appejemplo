import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { PieComponent } from './pie/pie.component';




@NgModule({
  declarations: [HeaderComponent, PieComponent],
  exports:[HeaderComponent, PieComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
