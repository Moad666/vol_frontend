import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { VolComponent } from './vol/vol.component';
import { AppUserComponent } from './app-user/app-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    UpdateClientComponent,
    VolComponent,
    AppUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
