import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { AngularMaterialModule } from 'src/app/helpers/angular-material.module';
import { MainLayoutRoutes } from './main-layout.routing';
import player from 'lottie-web';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlabsModule } from 'src/app/pages/slabs/slabs.module';

function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
    HighchartsChartModule,
    SharedModule,
  ],
  declarations: [MainLayoutComponent, HomeComponent],
})
export class MainLayoutModule {}
