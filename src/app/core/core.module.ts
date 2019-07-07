import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from 'src/app/material.module';
import { HeaderComponent } from './parcials/header/header.component';
import { FooterComponent } from './parcials/footer/footer.component';
import {Routes, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
