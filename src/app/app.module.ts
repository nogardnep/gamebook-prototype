import { StoryPage } from './pages/story/story.page';
import { ScenePage } from './pages/scene/scene.page';
import { SceneComponent } from './components/scene/scene.component';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SQLite} from  '@ionic-native/sqlite/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    Storage,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
