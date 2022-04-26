import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import { AngularMaterialModule } from 'src/app/helpers/angular-material.module';
import { AuthLayoutRoutes } from './auth-layout.routing';
import player from 'lottie-web';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthLayoutComponent } from './auth-layout.component';
function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [LoginComponent, AuthLayoutComponent],
})
export class AuthLayoutModule {}
