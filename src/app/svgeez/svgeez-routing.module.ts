import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvgeezComponent } from './svgeez.component';

const routes: Routes = [{ path: '', component: SvgeezComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SvgeezRoutingModule { }
