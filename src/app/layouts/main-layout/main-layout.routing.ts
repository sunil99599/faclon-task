import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/auth-guard';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const MainLayoutRoutes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'slabs',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/pages/slabs/slabs.module').then((s) => s.SlabsModule),
      },
    ],
  },
];
