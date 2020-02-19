import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgeezRoutingModule } from './svgeez-routing.module';
import { SvgeezComponent } from './svgeez.component';


@NgModule({
  declarations: [SvgeezComponent],
  imports: [
    CommonModule,
    SvgeezRoutingModule
  ]
})
export class SvgeezModule { }
