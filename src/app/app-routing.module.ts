import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlacComponent } from './components/alac/alac.component';
import {EditComponent} from './components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AlacComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
