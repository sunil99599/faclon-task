import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { AngularMaterialModule } from 'src/app/helpers/angular-material.module';
import player from 'lottie-web';
import { AddSlabComponent } from './add-slab/add-slab.component';
import { DisplaySlabsComponent } from './display-slabs/display-slabs.component';
import { SlabsComponent } from './slabs.component';
import { SlabsRoutingModule } from './slabs.routing';
function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
    SlabsRoutingModule,
  ],
  declarations: [SlabsComponent, AddSlabComponent, DisplaySlabsComponent],
})
export class SlabsModule {}
