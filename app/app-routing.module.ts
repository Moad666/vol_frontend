import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { VolComponent } from './vol/vol.component';
import { AppUserComponent } from './app-user/app-user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : "clients", component : ClientComponent},
  {path : "vols", component : VolComponent},
  {path : "update-client/:id", component : UpdateClientComponent},
  {path : "", component : AppUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
