import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { URLService } from './url.service';
import { FileUploadClientService } from './file-client.service';

import { AppComponent } from './app.component';
import { ShortURLComponent } from './short-url/short-url.component';
import { InputURLComponent } from './input-url/input-url.component';

const appRoutes: Routes = [
  {   path: '', component: AppComponent, children: [
    {path: '', component: InputURLComponent, pathMatch: 'full'  },
    {path: ':shorturl', component: ShortURLComponent},
]},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShortURLComponent,
    InputURLComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [URLService, FileUploadClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
