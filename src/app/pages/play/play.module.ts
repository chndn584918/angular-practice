import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { BowlingComponent } from './bowling/bowling.component';
import { SharedComponentModule } from '../../component/shared/shared-component.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    PlayComponent,
    BowlingComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    SharedComponentModule,
    MaterialModule
  ],
  exports: [
    PlayComponent,
    BowlingComponent
  ]
})
export class PlayModule { }
