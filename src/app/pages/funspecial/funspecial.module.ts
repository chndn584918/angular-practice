import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunspecialRoutingModule } from './funspecial-routing.module';
import { FunspecialComponent } from './funspecial.component';
import { SummerFunpassComponent } from './summer-funpass/summer-funpass.component';
import { SharedComponentModule } from '../../component/shared/shared-component.module';

@NgModule({
  declarations: [
    FunspecialComponent,
    SummerFunpassComponent
  ],
  imports: [
    CommonModule,
    FunspecialRoutingModule,
    SharedComponentModule
  ],
  exports: [
    FunspecialComponent,
    SummerFunpassComponent
  ]
})
export class FunspecialModule { }
