import { Routes, RouterModule } from '@angular/router';
import { AddSlabComponent } from './add-slab/add-slab.component';
import { DisplaySlabsComponent } from './display-slabs/display-slabs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DisplaySlabsComponent },
  { path: 'add-slab', component: AddSlabComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlabsRoutingModule {}
