import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesPageComponent } from '../pages/images-page/images-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'images', component: ImagesPageComponent },
  { path: '**', component: NotFoundPageComponent } // deixar esse sempre por ultimo // Descomentar em prod
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
