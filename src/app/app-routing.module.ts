import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './addusers/add/add.component';
import { GetComponent } from './getusers/get/get.component';
import { DeleteComponent } from './deleteusers/delete/delete.component';
import { UpdateComponent } from './updateusers/update/update.component';

const routes: Routes = [
  {path :'add',component:AddComponent},
  {path :'get',component:GetComponent},
  {path :'update/:id',component:UpdateComponent},
  {path :'delete/:id',component:DeleteComponent},
  { path: '', redirectTo: '/get', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
