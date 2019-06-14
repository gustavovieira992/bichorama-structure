import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'painel',
        loadChildren: './painel/painel.module#PainelModule',
      },
      {
        path: 'painel-admin',
        loadChildren: './painel-admin/painel-admin.module#PainelAdminModule',
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'site',
        loadChildren: './site/site.module#SiteModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
