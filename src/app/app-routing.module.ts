import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { CustomPreloadingServiceService } from './custom-preloading-service.service';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponentComponent,
  },
  {
    path: 'about',
    // data: { preload: true },
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'users',
    // data: { preload: true },
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      preloadingStrategy: CustomPreloadingServiceService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
