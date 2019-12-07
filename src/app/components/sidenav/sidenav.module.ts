import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule,MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SidenavModule { }
