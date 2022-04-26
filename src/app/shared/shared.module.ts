import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/helpers/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  declarations: [SidenavComponent, HeaderComponent],
  exports: [SidenavComponent, HeaderComponent],
})
export class SharedModule {}
